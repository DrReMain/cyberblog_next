import type {NextPage} from 'next'
import Head from 'next/head'
import {wrapper} from "@/store";
import Index, {IProps} from "@/features";

const IndexPage: NextPage<IProps> = (props) => {
    return (
        <>
            <Head>
                <title>企业级博客</title>
                <meta name="description" content="客户端使用nextjs，后段使用golang微服务"/>
            </Head>


            <Index {...props}  />
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(_ => async (ctx) => {
    const {name} = _.getState().persist;
    return {
        props: {
            name
        }
    }
})

export default IndexPage
