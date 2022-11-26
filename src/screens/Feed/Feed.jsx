import { View, Text } from "react-native";
import React from "react";
import { Layout } from "src/components/layout/Layout";
import { PostContainer } from "src/domain/PostContainer/PostContainer";

export function Feed() {
    return (
       <Layout>
      
        <PostContainer/>
        <PostContainer/>
        <PostContainer/>
        <PostContainer/>
        <PostContainer/>
        <PostContainer/>
    
       </Layout>
    );
}
