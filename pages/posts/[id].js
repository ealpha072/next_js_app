import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths({params} ) {
   const postData = getPostData(params.id);
    return {
        props:{
            postData,
        }
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.id}
            <br />
            {postData.title}
            <br />
            {postData.date}
        </Layout>
    )
}