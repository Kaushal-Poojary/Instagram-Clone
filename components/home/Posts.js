import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

// Import Data
import { postFooterIcons } from "../../data/post-footer-icons";

const Posts = ({ post }) => {
  return (
    <View style={styles.container} >
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={footerStyles.footerComponent}>
        <PostFooter post={post} />
      </View>
      <View style={[footerStyles.footerComponent, {marginLeft: 15}]}>
        <Likes likes={post.likes} />
      </View>
      <Caption caption = {post.caption} user = {post.user} />
      {post.comments && <CommentSection comments = {post.comments} />}
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View style={headerStyles.headerContainer}>
      <TouchableOpacity style={{marginTop: 5}}>
        <View style={headerStyles.wrap}>
            <Image source={{uri: post?.profile_picture}} style={headerStyles.avatar} />
            <Text style={headerStyles.headerText}>{post?.user}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginRight: 5}}>
        <Text style={headerStyles.headerText}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

const PostImage = ({ post }) => {
  
  // Set the initial dimensions of the image
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  let imageAspectRatio = 1;
  
  // Get the dimensions of the image
  const handleImageLoad = (event) => {
    const { width, height } = event.nativeEvent.source;
    setImageDimensions({ width, height });
  };

  // Set the aspect ratio for the image
  imageAspectRatio = imageDimensions.width / imageDimensions.height;

  return (
    <View style={[imageStyles.imageContainer, { aspectRatio: imageAspectRatio ? imageAspectRatio : 16/9 }]}>
      <Image source={{ uri: post?.imageUrl }} style={imageStyles.postImage} onLoad={handleImageLoad} />
    </View>
  )
}

const PostFooter = ({ post }) => {
  return (
    <View style={footerStyles.footerWrap}>
      <View style={footerStyles.leftFooterIcons}>
        <Icon iconStyle = {footerStyles.footerIcon} icon = {postFooterIcons[0].imageUrl} />
        <Icon iconStyle = {footerStyles.footerIcon} icon = {postFooterIcons[1].imageUrl} />
        <Icon iconStyle = {footerStyles.footerIcon} icon = {postFooterIcons[2].imageUrl} />
      </View>
      <View>
        <Icon iconStyle = {footerStyles.footerIcon} icon = {postFooterIcons[3].imageUrl} />
      </View>
    </View>
  )
}

const Icon = ({ iconStyle, icon }) => {
  return (
    <TouchableOpacity>
      <Image source={{uri: icon}} style={iconStyle} />
    </TouchableOpacity>
  )
}

const Likes = ({ likes }) => {
  return (
    <View style={footerStyles.footerWrap}>
      <Text style={footerStyles.footerText}>{likes.toLocaleString('en')} likes</Text>
    </View>
  )
}

const Caption = ({ caption, user }) => {
  const width = Dimensions.get('window').width - 20;
  return (
    <Text style={[captionStyles.captionWrap, {width: width}]}>
      <Text style={[captionStyles.captionText, {fontWeight: 600}]}>{user}</Text>
      <Text style={[captionStyles.captionText, {marginLeft: 5}]}>{'  ' + caption}</Text>
    </Text>
  )
}

const CommentSection = ({ comments }) => {
  return (
    <View>
      <Text style={[captionStyles.captionWrap, {marginHorizontal: 15, marginTop: 5, marginBottom: 5}]}>
        <Text style={[captionStyles.captionText, { color: 'gray' }]}>
          {`View ${comments.length > 1 ? 'all ' : ''}${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}`}
        </Text>
      </Text>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </View>
  )
}

const Comment = ({ comment }) => {
  return (
    <View style={commentStyles.commentWrap}>
      <Text>
        <Text style={[commentStyles.commentText, {fontWeight: 600}]}>{comment.user}  </Text>
        <Text style={[commentStyles.commentText, {marginLeft: 5}]}>{comment.comment}</Text>
      </Text>
    </View>
  )
}

const headerStyles = StyleSheet.create({
    headerContainer: {
      margin: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    avatar: {
      width: 35,
      height: 35,
      borderRadius: 50,
      marginLeft: 10,
      borderWidth: 1.3,
      borderColor: "#ff8501",
    },
    headerText: {
      color: 'white',
      marginLeft: 5,
      fontWeight: '700',
    },
    wrap: {
      flexDirection: 'row',
      alignItems: 'center',
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        marginBottom: 15,
    },
});

const imageStyles = StyleSheet.create({
    postImage: {
        resizeMode: "cover",
        flex: 1
    },
    imageContainer: {
    },
});

const footerStyles = StyleSheet.create({
  footerIcon: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  footerComponent: {
    marginHorizontal: 8,
    marginTop: 10,
  },
  footerWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftFooterIcons: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
  footerText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});

const captionStyles = StyleSheet.create({
  captionWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 5,
  },
  captionText: {
    color: "white",
    fontSize: 14,
    textAlign: "justify",
  },
});

const commentStyles = StyleSheet.create({
  commentWrap: {
    flexDirection: "row",
    marginHorizontal: 15,
  },
  commentText: {
    color: "white",
    fontSize: 14,
    textAlign: "justify",
  },
});

export default Posts;
