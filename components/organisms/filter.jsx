import { useEffect, useState } from "react"
import { ref } from 'firebase/storage'
import { useGetDataCategories } from "../../hooks"

import { storageRoot, getImageUrl } from '../../utils/firebase/initFirebase'
import Image from "next/image"

import Styles from './style.module.css'

const SIZES = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE"
}

export default function Filter() {
  const [categoryToShow, setCategoryToShow] = useState({})
  const [subCategoryToShow, setSubCategoryToShow] = useState({})
  const [categoryeSelected, setCategoryeSelected] = useState('')
  const [subcategorieSelected, setSubcategorieSelected] = useState('')

  const { data, isError, isLoading } = useGetDataCategories()

  useEffect(() => {
    if (!isLoading) {
      onHandleSetCategory('motores')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading])

  const onHandleSetCategory = (categoryName, subCategoryName) => {
    data.categories.map(async (category) => {
      if (category?.category_name == categoryName) {
        let setSubCategories;
        if (subCategoryName !== undefined) {
          setSubCategories = Promise.all(
            category.sub_categories.filter((subcategories) => subcategories.sub_category_name === subCategoryName)
              .map(async (subcategories) => {
                const product = Promise.all(subcategories.products.map(async (product) => {
                  const imageURL = await getUrlImage(category.category_name, product.ref, SIZES.SMALL).then((imageUrl) => imageUrl)
                  return { ...product, image_url: imageURL }
                }))
                setSubcategorieSelected(subcategories.sub_category_name)
                return {
                  sub_category_name: subcategories.sub_category_name,
                  products: await product
                }
              }))
        } else {
          setSubCategories = Promise.all(
            category.sub_categories.map(async (subcategories) => {
              const product = Promise.all(subcategories.products.map(async (product) => {
                const imageURL = await getUrlImage(category.category_name, product.ref, SIZES.SMALL).then((imageUrl) => imageUrl)
                return { ...product, image_url: imageURL }
              }))
              setSubcategorieSelected('')
              return {
                sub_category_name: subcategories.sub_category_name,
                products: await product
              }
            }))
        }
        setCategoryToShow({
          category_name: category.category_name,
          sub_categories: await setSubCategories
        })
        setCategoryeSelected(category.category_name)
      }
    })
  }

  const getUrlImage = async (categoryName, reference, size) => {
    const dataImage = await getImageUrl(ref(storageRoot, `productos/${categoryName}/${reference}_${size}.jpg`))
    return dataImage
  }

  isError && <div>{isError}</div>

  if (isLoading) {
    return <span>loading...</span>
  } else {
    return (
      <div className={Styles.filterWrapper}>
        <ul className={Styles.filterOptions}>
          {
            data.categories.map((category, indx) => {
              return (
                <li className={Styles.filterItem} key={indx}>
                  <span style={{
                    color: category.category_name === categoryeSelected ? '#cb4450' : '#000',
                    fontWeight: category.category_name === categoryeSelected ? 'bold' : 'normal'
                  }}
                    onClick={() => { onHandleSetCategory(category.category_name) }}>
                    {category.category_name.toUpperCase()}</span>
                  {
                    category.sub_categories[0].sub_category_name !== null && (
                      <ul className={`${Styles.filterOptions} ${Styles.filterOptionsSubCategories}`}>
                        {category.sub_categories.map((subcategories, indx) => (
                          <li className={Styles.filterItem} key={indx} onClick={() => { onHandleSetCategory(category.category_name, subcategories.sub_category_name) }}>
                            <span
                              style={{
                                color: subcategories.sub_category_name === subcategorieSelected ? '#cb4450' : '#000',
                                fontWeight: subcategories.sub_category_name === subcategorieSelected ? 'bold' : 'normal'
                              }}>{subcategories.sub_category_name.toUpperCase()}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }
                </li>
              )
            })
          }
        </ul>
        <section className={Styles.productsWrapper}>
          <h2 className={Styles.productsWrapperTitle}>
            {
              categoryToShow?.category_name !== undefined && (
                categoryToShow?.category_name.toUpperCase()
              )
            }
            {
              categoryToShow.sub_categories !== undefined && categoryToShow?.sub_categories[0]?.sub_category_name !== null ? (
                <span style={{ color: '#cb4450' }} > &#62; {categoryToShow?.sub_categories[0]?.sub_category_name?.toUpperCase()}</span>
              ) : null
            }
          </h2>
          <ul className={Styles.productsList}>
            {
              categoryToShow?.sub_categories?.map((subcategories) => {
                return subcategories.products.map((product, indx) => {
                  return (
                    <li className={Styles.productsItem} key={`${indx}-${product.product_name}`}>
                      <Image
                        src={product.image_url}
                        alt={product.product_name}
                        width={216}
                        height={162}
                        layout="responsive"
                      />
                      <div className={Styles.productsItemTitle}>
                        {`${product.product_name.toUpperCase()}`} <span style={{ color: '#cb4450' }}>{`${product.sku.toUpperCase()}`}</span>
                      </div>
                    </li>
                  )
                })
              })
            }
          </ul>
        </section>
      </div>
    )
  }
}