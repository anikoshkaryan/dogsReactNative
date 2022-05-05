import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop } from "react-native-svg";
import { LinearGradient } from 'expo-linear-gradient';
import { SliderBox } from "react-native-image-slider-box";
import SingleVideo from '../include/SingleVideo';
import {
    Text,
    Alert,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    ActivityIndicator,
    ImageBackground,
    ScrollView,
    Modal,
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchAuto: null,
            dogsFood: this.props.dogs_food_info,
            showFilter: false,
            current_image: 1,
            // slider_images: [
            //     require('../../assets/images/slider_img4.jpg'),
            //     require('../../assets/images/slider_img5.png'),
            //     require('../../assets/images/slider_img6.jpg')
            // ],

            menuIsOpen: false,
            video: null,
            status: {},
        };

    }

    componentDidMount() {


    }

    getDogs = () => {
        return this.state.dogs;
    }

    redirectToLogin = () => {
        this.closeModal();
        this.props.navigation.navigate("Login");
    }
    redirectToDogFood = () => {
        this.props.navigation.navigate("DogFood");

    }



    sliderImages = () => {
        return this.state.dogsFood.slider_images;
    }

    render() {
        // const video = React.useRef(null);

        return (
            <SafeAreaView style={styles.container} >

                <ScrollView>
                    {/*TOP PANEL START*/}

                    <View style={styles.top_panel}>
                        <TouchableOpacity style={styles.back_to_dog_breeds_page_btn} onPress={this.redirectToDogFood}>
                            <Svg
                                width={26}
                                height={26}
                                viewBox="0 0 18 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"

                            >
                                <Path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.165 6.007l-.002.354c-.012 1.404-.096 2.657-.242 3.451 0 .015-.16.802-.261 1.064-.16.38-.447.701-.808.905a2 2 0 01-.91.219c-.25-.012-.661-.137-.955-.242l-.244-.094C5.126 11.022 2.036 8.924.852 7.64l-.087-.09-.39-.42A1.856 1.856 0 010 5.992c0-.379.116-.758.347-1.064.07-.099.18-.226.28-.334l.379-.397C2.31 2.876 5.135 1.022 6.599.407c0-.013.91-.393 1.343-.407H8c.664 0 1.285.379 1.602.991.087.168.17.496.233.784l.114.544c.13.874.216 2.216.216 3.688zm6.332-1.525c.83 0 1.503.68 1.503 1.518a1.51 1.51 0 01-1.503 1.517l-3.7-.327c-.65 0-1.179-.532-1.179-1.19 0-.658.528-1.191 1.18-1.191l3.699-.327z"
                                    fill="#b56422"
                                />
                            </Svg>
                        </TouchableOpacity>
                    </View>

                    {/*TOP PANEL END*/}

                <LinearGradient colors={['#E1C1B7', '#FFFFFF']} style={styles.dogs_breeds_wrapper} >


                    <View style={styles.slider_wrapper}>

                        <View style={styles.slider_length}>
                            <Text style={styles.slider_text}>{this.state.current_image}</Text>
                            <Text style={styles.slider_text}>-</Text>
                            <Text style={styles.slider_text}>{this.state.dogsFood.slider_images.length}</Text>


                        </View>

                        <SliderBox
                            // dotStyle={{
                            //     width:16,
                            //     height:16,
                            //     borderRadius:60,
                            //     backgroundColor:'#00000099'
                            //
                            // }}
                            style={styles.slider_images}
                            // inactiveDotColor="#EDDAD4"
                            // dotColor="#9F9EAE"
                            // sliderBoxHeight={235}

                            paginationBoxStyle={{
                                // alignItems: "center",
                                // alignSelf: "center",
                                // justifyContent: "center",
                                // paddingVertical: 10,
                                // backgroundColor:"#00000099"
                                display: "none",
                            }}
                            images={this.sliderImages()}
                            onCurrentImagePressed={index => console.log(index)}
                            currentImageEmitter={index => this.setState({current_image: index+1})}
                        />
                    </View>

                    <View style={styles.dogs_breeds_slider_item_info_wrapper}>
                        <Text style={styles.dogs_breeds_slider_item_info_title}>
                            {this.state.dogsFood.name}
                        </Text>
                        <Text style={styles.dogs_breeds_slider_item_info_text}>
                            {this.state.dogsFood.info}
                        </Text>

                    </View>

                    <SingleVideo style={styles.video_box} video_url={{url: this.state.dogsFood.video_url}}/>

                    <View style={styles.reviews_wrapper}>
                        <View style={styles.send_reviews_input_btn_wrapper}>
                            <TextInput
                                style={[styles.review_input]}
                                onChangeText={(val) => this.setState({reviewInput:val})}
                                value={this.state.reviewInput}
                                placeholder="Message"
                                placeholderTextColor="#c9a477"
                            />
                            <View style={styles.reviews_send_button_wrapper}>

                                <TouchableOpacity style={styles.reviews_send_button}>
                                    <Text style={styles.reviews_send_button_text}>Отправить</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View>
                            <Text style={styles.reviews_main_title}>Отзывы</Text>
                            <View style={styles.review_example}>
                                <Text style={styles.review_example_person_name}>
                                    Ольга Серябкина
                                </Text>
                                <Text style={styles.review_example_text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod ut metus a dictum. Praesent semper rhoncus aliquet. Vivamus quam mi, rutrum eu condimentum eget, posuere aliquet velit. Vivamus pellentesque placerat massa, non egestas ligula tempor vitae. Aenean vel orci a risus mattis ultrices. Nam urna eros, tincidunt eu erat sed, pellentesque vehicula mi. Cras tempor at lorem et malesuada. Sed tincidunt ipsum at iaculis pellentesque. Aliquam eu nunc non nisi luctus pulvinar.
                                </Text>
                            </View>
                            <View style={styles.review_example}>
                                <Text style={styles.review_example_person_name}>
                                    Наталья  Фёдоров
                                </Text>
                                <Text style={styles.review_example_text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod ut metus a dictum. Praesent semper rhoncus aliquet. Vivamus quam mi, rutrum eu condimentum eget, posuere aliquet velit. Vivamus pellentesque placerat massa, non egestas ligula tempor vitae. Aenean vel orci a risus mattis ultrices. Nam urna eros, tincidunt eu erat sed, pellentesque vehicula mi. Cras tempor at lorem et malesuada. Sed tincidunt ipsum at iaculis pellentesque. Aliquam eu nunc non nisi luctus pulvinar.
                                </Text>
                            </View>
                            <View style={styles.review_example}>
                                <Text style={styles.review_example_person_name}>
                                    Юлия Исаев
                                </Text>
                                <Text style={styles.review_example_text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod ut metus a dictum. Praesent semper rhoncus aliquet. Vivamus quam mi, rutrum eu condimentum eget, posuere aliquet velit. Vivamus pellentesque placerat massa, non egestas ligula tempor vitae. Aenean vel orci a risus mattis ultrices. Nam urna eros, tincidunt eu erat sed, pellentesque vehicula mi. Cras tempor at lorem et malesuada. Sed tincidunt ipsum at iaculis pellentesque. Aliquam eu nunc non nisi luctus pulvinar.
                                </Text>
                            </View>
                            <View style={styles.review_example}>
                                <Text style={styles.review_example_person_name}>
                                    Александр Лагунов
                                </Text>
                                <Text style={styles.review_example_text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod ut metus a dictum. Praesent semper rhoncus aliquet. Vivamus quam mi, rutrum eu condimentum eget, posuere aliquet velit. Vivamus pellentesque placerat massa, non egestas ligula tempor vitae. Aenean vel orci a risus mattis ultrices. Nam urna eros, tincidunt eu erat sed, pellentesque vehicula mi. Cras tempor at lorem et malesuada. Sed tincidunt ipsum at iaculis pellentesque. Aliquam eu nunc non nisi luctus pulvinar.
                                </Text>
                            </View>
                        </View>




                    </View>
                </LinearGradient>

               </ScrollView>

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#ffffff',
            position:'relative'

        },


        dogs_breeds_wrapper: {
            width: "100%",
            // paddingVertical: 50,
            // paddingHorizontal: 20,
            flex:1
        },


        dogs_items_scrollView: {
            flex: 1,
            height: "100%",
            width: "100%",
        },

        slider_wrapper: {
            width: "100%",
            height: 268,
            position: "relative",
            marginBottom: 20,
        },
        slider_images: {
            width: "100%",
            height: "100%",
            // borderTopRightRadius: 20,
            // borderTopLeftRadius: 20,
        },
        slider_length: {
            position: "absolute",
            bottom: 25,
            alignSelf: "center",
            backgroundColor: "#00000099",
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 4,
            zIndex: 9,
            flexDirection: "row",
            alignItems: "center",

        },
        slider_text: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 12,
        },
        dogs_breeds_slider_item_info_wrapper: {
            paddingHorizontal: 20,
            marginBottom: 20,
        },
        dogs_breeds_slider_item_info_title: {
            marginBottom: 10,
            fontWeight: "bold",
            fontSize: 30,
            color: "#b56422",
        },
        dogs_breeds_slider_item_info_text: {
            fontSize: 18,
            color: "#c9a477",
        },
        back_to_dog_breeds_page_btn: {
            position: "absolute",
            zIndex: 1,
            top: 20,
            left: 20,
        },

        video_box: {
          marginBottom: 20,
        },

    top_panel: {
        backgroundColor:'white',
        width:'100%',
        height:56,
        paddingLeft:12,
        paddingRight:12,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection:'row',
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 2,
        marginBottom: 10,

    },
        reviews_wrapper: {
            backgroundColor: "#c9a4776e",
            width: "100%",
            marginTop: 20,
            padding: 20,
        },

        review_input: {
            width: "100%",
            backgroundColor: "#ffffff",
            paddingTop: 15,
            paddingBottom: 100,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 16,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            color: "#c9a477",
        },
        reviews_send_button: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#b564228c",
            paddingVertical: 16,
            borderRadius: 10,

        },
        reviews_send_button_text: {
            fontWeight: "bold",
            color: "#ffffff",
            fontSize: 16,
        },
        send_reviews_input_btn_wrapper: {
            marginBottom: 30,
        },
        reviews_main_title: {
            fontWeight: "bold",
            color: "#b56422",
            fontSize: 25,
            marginBottom: 20,
        },
        review_example: {
            backgroundColor: "#ffffff",
            paddingVertical: 16,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 12,

        },
        review_example_person_name: {
            fontWeight: "bold",
            color: "#b56422",
            fontSize: 16,
            marginBottom: 10,
        },
        review_example_text: {
            color:'#1D1D20',
            fontSize: 14,
        },


    }
);