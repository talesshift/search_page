import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Search } from "../components/search"
import SearchResults from "../components/searchResults"
import useGoogleSearch from "../components/useGoogleSearch"
import { container } from "../consts"
import { test_error, test_response } from "../response"
import queryString from 'query-string'

type Props = {
    className?: string
}

type location_ex ={
    pathname: string,
    search: string,
    state: {
        query: string,
    }
}

const Results_unstyled = (props: Props) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query')
    if(query === null){
        navigate("/")
    }

    const data = useGoogleSearch(query || "google")

    console.log(data)

    //const data = response;

    return (
        <section className={props.className}>
            <Search input={searchParams.get('query')||""} size="medium"/>
            <SearchResults request={data || test_error} />
        </section>
    );
};

const Results = styled(Results_unstyled)`
    height:100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    .title{
        ${container}
        font-size:1.25rem;
        border-bottom: 1px solid #C4C4C4;
        padding-bottom: 0.2rem;
    }
`

export default Results;

//process.env.REACT_APP_CUSTOM_SEARCH_API_KEY