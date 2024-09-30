import BookList from "../components/BookList"
import BookFilter from "../components/filter/BookFilter"

const ContentCategory = () => {
    return(
        <div className="container flex mx-auto">
            <BookFilter />
            <BookList />
        </div>
    )
}

export default ContentCategory