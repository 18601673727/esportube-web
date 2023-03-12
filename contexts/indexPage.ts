import createUseContext from 'constate'
import { useState } from 'react'

function useIndexPage({ initialCategory = 0, initialPage = 0 }) {
  const [category, setCategory] = useState(initialCategory)
  const changeCategory = (value: number) => setCategory(_ => value)

  const [page, setPage] = useState(initialPage)
  const changePage = (value: number) => setPage(_ => value)

  return { category, changeCategory, page, changePage }
}

const useIndexPageContext = createUseContext(useIndexPage)

export default useIndexPageContext