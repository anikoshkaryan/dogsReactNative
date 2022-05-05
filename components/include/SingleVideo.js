import * as ScreenOrientation from 'expo-screen-orientation'
import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native'
import { Video } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import React, { useRef, useState } from 'react'
import VideoPlayer from 'expo-video-player'

const App = (props) => {
    const [inFullscreen, setInFullsreen] = useState(false)
    const [inFullscreen2, setInFullsreen2] = useState(false)
    const refVideo = useRef(null)
    const refVideo2 = useRef(null)
    const refScrollView = useRef(null)

    return (
    <VideoPlayer
        videoProps={{
            // shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: {
                uri: props.video_url.url,
            },
        }}
        fullscreen={{
            visible: false,
        }}
        style={{ height: 250 }}
    />

)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    text: {
        marginTop: 36,
        marginBottom: 12,
    },
})

export default App