import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop } from "react-native-svg";
import { LinearGradient } from 'expo-linear-gradient';

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
            dogs: [
                {
                    id: 1,
                    name: "Бульдог",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit1." ,
                    isWish: false,
                    img: require('../../assets/images/dog_img1.jpg'),
                    slider_images: [
                        require('../../assets/images/slider_img1.jpg'),
                        require('../../assets/images/slider_img2.jpg'),
                        require('../../assets/images/slider_img3.png')
                    ],
                    video_url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                } ,
                {
                    id: 2,
                    name: "Хаски",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2. " ,
                    isWish: false,
                    img: require('../../assets/images/dog_img3.jpg'),
                    slider_images: [
                        require('../../assets/images/dog_img3.jpg'),
                        require('../../assets/images/husky_slider_img1.jpg'),
                        require('../../assets/images/husky_slider_img3.jpg')
                    ],
                    video_url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',

                } ,
                {
                    id: 3,
                    name: "Чихуахуа",
                    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit3. " ,
                    isWish: true,
                    img: require('../../assets/images/dog_img7.jpg'),
                    slider_images: [
                        require('../../assets/images/dog_img7.jpg'),
                        require('../../assets/images/chixuxaya_slider_img2.jpg'),
                        require('../../assets/images/chixuxaya_slider_img3.jpg')
                    ],
                    video_url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                } ,
                {
                    id: 4,
                    name: "Овчарка",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit4." ,
                    isWish: false,
                    img: require('../../assets/images/dog_img8.jpg'),
                    slider_images: [
                        require('../../assets/images/dog_img8.jpg'),
                        require('../../assets/images/ovcharka_slider_img2.jpg'),
                        require('../../assets/images/ovcharka_slider_img3.jpg')
                    ],
                    video_url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                } ,

            ],
            showFilter: false,
            categoriesItems: [{
                value: 'BMW',
            }, {
                value: 'FERRARI',
            }, {
                value: 'Bentley',
            }],
            citiesItems: [{
                value: 'Moscow',
            }, {
                value: 'Sankt Petersburg',
            }, {
                value: 'Sochi',
            }],
            sort_by_default: true,
            sort_by_date: false,
            sort_by_cheaper: false,
            sort_by_expensive: false,
            cityInput: null,
            streetInput: null,
            priceInput: null,
            priceInput2: null,
            setFromValue: 1,
            setToValue: 5,
            fromValue: 0,
            toValue: 100,

            menuIsOpen: false,
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

        this.closeModal();
        this.props.navigation.navigate("DogFood");

    }


    redirectToDogsBreedsSinglePage = (dog) => {
        this.closeModal();
        this.props.navigation.navigate("DogsBreedsSinglePage", {
            params:dog,
        });

    }
    redirectToQuestions = () => {
        this.closeModal();
        this.props.navigation.navigate("Questions");

    }
    closeModal = () => {
        this.setState({
            menuIsOpen: false,
        })
    }

    render() {

        return (
            <SafeAreaView style={styles.container} >


                {/*TOP PANEL START*/}

                    <View style={styles.top_panel}>
                        <TouchableOpacity style={{marginRight:10,padding:10}} onPress={() => this.setState({menuIsOpen:true})}>
                            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path stroke="#b56422" strokeLinecap="round" d="M2.5 5.5L21.5 5.5" />
                                <Path stroke="#b56422" strokeLinecap="round" d="M2.5 12L21.5 12" />
                                <Path stroke="#b56422" strokeLinecap="round" d="M2.5 18.5L21.5 18.5" />
                            </Svg>
                        </TouchableOpacity>

                        <Text style={styles.toptext}>
                            Породы собак
                        </Text>

                    </View>

                {/*TOP PANEL END*/}

                {/*Open Menu Modal START*/}
                    {this.state.menuIsOpen &&

                        <View style={{position:'absolute', top:0, left:0, zIndex:55, width:'100%', height:'100%', flexDirection:'row', elevation: 6, }}>
                            <View style={{width:304,  height: '100%', backgroundColor:'white', borderRightWidth:1, borderRightColor:'#f4f4f4', paddingTop: 50}}>
                                <View style={{width:'100%', height:'100%'}}>

                                    <TouchableOpacity
                                        style={styles.menuItem}
                                        onPress={() => {}}
                                    >
                                        <Svg style={styles.menuItemSvg} width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg" >
                                            <Path fillRule="evenodd" clipRule="evenodd" d="M12 1.833C6.385 1.833 1.833 6.385 1.833 12c0 2.121.65 4.09 1.76 5.718a.5.5 0 01-.827.564A11.117 11.117 0 01.833 12C.833 5.833 5.833.833 12 .833s11.167 5 11.167 11.167c0 2.328-.714 4.492-1.934 6.282a.5.5 0 11-.826-.564A10.117 10.117 0 0022.167 12c0-5.615-4.552-10.167-10.167-10.167zM4.57 20.331a.513.513 0 00.053.052A11.127 11.127 0 0012 23.167c2.832 0 5.418-1.055 7.386-2.792a.5.5 0 00-.01-.758A11.126 11.126 0 0012 16.833a11.126 11.126 0 00-7.387 2.792.5.5 0 00-.044.706zM12 22.167c-2.368 0-4.546-.81-6.275-2.167A10.121 10.121 0 0112 17.833c2.368 0 4.546.81 6.274 2.167A10.12 10.12 0 0112 22.167zm3-11.5a3 3 0 11-6 0 3 3 0 016 0zm1 0a4 4 0 11-8 0 4 4 0 018 0z" fill="#b56422"/>
                                        </Svg>

                                        <Text style={styles.menuItemText}>Личный кобинет</Text>
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        style={styles.menuItem}
                                        onPress={() => {}}
                                    >
                                        <Svg
                                            style={styles.menuItemSvg}
                                            width={24}  height={24}
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 479.997 479.997"
                                            xmlSpace="preserve"
                                            enableBackground="new 0 0 479.997 479.997"
                                            fill="#b56422"

                                        >
                                            <Path d="M303.882 387.949c-27.451 9.424-46.143-9.094-53.929-19.218a10.009 10.009 0 00-.323-3.751c24.072-4.618 41.152-24.895 41.152-50.742 0-5.522-4.477-10-10-10H197.3c-5.523 0-10 4.478-10 10 0 25.542 16.693 45.634 40.329 50.563a10.01 10.01 0 00-.387 3.861c-2.649 3.418-6.557 7.825-11.601 11.791-12.939 10.173-27.175 12.695-42.316 7.496-5.224-1.793-10.912.988-12.706 6.211-1.793 5.223.987 10.911 6.21 12.705 7.28 2.5 14.501 3.742 21.58 3.742 13.984 0 27.405-4.85 39.592-14.432 4.137-3.252 7.675-6.711 10.598-9.949 2.923 3.238 6.462 6.697 10.599 9.949 12.189 9.582 25.609 14.432 39.596 14.432 7.078 0 14.302-1.243 21.582-3.742 5.224-1.793 8.004-7.482 6.211-12.705-1.793-5.223-7.479-8.004-12.705-6.211zm-64.825-41.975c-15.142.001-26.586-8.557-30.391-21.736h60.752c-3.801 13.179-15.234 21.736-30.361 21.736z" />
                                            <Path d="M478.38 363.171c-1.693-72.82-10.413-132.147-25.919-176.353-12.458-35.516-29.325-61.5-50.131-77.233-25.665-19.407-49.427-17.151-56.3-15.953a149.671 149.671 0 00-41.207-31.518l4.372-9.478a10.001 10.001 0 00-10.807-14.038l-50.581 8.866 3.397-6.79a9.998 9.998 0 00-13.485-13.383l-71.33 36.37c-.194.1-.385.205-.573.316l-9.584 5.705c-.13.077-.258.157-.384.24a150.064 150.064 0 00-27.342 23.082c-10.284-.661-29.928.768-50.837 16.579-20.806 15.733-37.673 41.719-50.131 77.233C12.031 231.024 3.31 290.352 1.619 363.172 1.242 365.717.05 374.513.002 384.339c-.086 17.718 3.523 29.321 11.034 35.475 2.385 1.953 6.695 4.514 12.9 4.514 2.808 0 6.004-.524 9.584-1.866 21.319-8.008 37.861-51.678 40.96-60.351a10.03 10.03 0 00.512-2.168l1.535-12.722c8.471 21.211 21.348 40.695 38.185 57.338 32.125 31.752 74.601 49.238 119.605 49.238 44.99 0 87.445-17.487 119.543-49.241 21.798-21.564 36.957-47.899 44.487-76.587l6.796 32.805c.094.454.219.9.375 1.337 3.099 8.673 19.641 52.343 40.966 60.354 3.578 1.341 6.771 1.864 9.577 1.864 6.204 0 10.516-2.561 12.901-4.515 7.511-6.153 11.12-17.757 11.034-35.475-.046-9.827-1.238-18.624-1.616-21.168zM64.801 277.418l-9.529 78.998c-7.509 20.554-20.476 44.201-28.778 47.319-1.585.595-2.424.621-2.679.621-.055 0-.082-.002-.084.002-.151-.127-3.669-3.391-3.73-19.012-.04-10.166 1.458-19.615 1.472-19.703.073-.453.115-.912.126-1.371 3.545-156.517 38.651-215.941 67.476-238.231 8.327-6.439 16.229-9.839 22.887-11.57-13.998 22.184-21.703 47.848-21.703 74.451v3.012c-20.448 26.629-24.838 57.535-25.458 85.484zm319.01 4.447l-.003 3.653c0 81.761-67.061 148.278-149.491 148.278-82.491 0-149.603-66.518-149.603-148.278 0-2.213.021-4.455.065-6.715l4.377-36.29c.083-.69.093-1.372.038-2.039 3.343-13.607 9.072-26.879 18.791-38.704a10.006 10.006 0 002.274-6.35v-6.499c0-40.651 21.081-78.829 56.401-102.171l9.104-5.419 44.434-22.657a9.998 9.998 0 001.765 8.041 9.995 9.995 0 009.746 3.876l51.329-8.998-2.523 5.472a10.001 10.001 0 0014.587 12.538c42.343 21.748 68.642 63.624 68.642 109.319v17.505c0 2.476.918 4.863 2.577 6.7 6.542 7.247 10.639 14.964 13.208 23.161.014.596.074 1.197.199 1.801l3.173 15.317c.936 8.98.924 18.461.91 28.459zm72.535 122.46c-.008.003-.814.171-2.835-.587-8.362-3.141-21.443-27.074-28.928-47.716l-21.95-105.945c-1.863-16.388-6.645-32.49-18.891-47.363v-13.792c0-26.627-7.732-52.715-22.362-75.442-.068-.105-.141-.208-.209-.313 7.705.928 18.328 4.039 29.753 12.874 28.825 22.291 63.93 81.716 67.476 238.232.011.459.053.918.126 1.372.015.092 1.49 9.321 1.473 19.478-.028 16.045-3.685 19.202-3.653 19.202z" />
                                            <Path d="M166.583 227.972c12.199.371 24.029 7.659 35.162 21.663a9.982 9.982 0 007.834 3.777c2.181 0 4.377-.71 6.217-2.172 4.323-3.438 5.042-9.729 1.605-14.051-15.021-18.895-31.982-28.724-50.41-29.214-28.87-.784-49.68 22.314-50.55 23.296-3.652 4.124-3.27 10.409.84 14.077 4.11 3.667 10.424 3.308 14.107-.788.153-.171 15.671-17.143 35.195-16.588zM299.595 207.976c-28.902-.789-49.672 22.315-50.543 23.297-3.662 4.135-3.278 10.455.856 14.116 4.136 3.662 10.456 3.278 14.116-.856.151-.171 15.676-17.096 35.04-16.563 12.245.324 24.118 7.614 35.292 21.667a9.977 9.977 0 007.833 3.776c2.181 0 4.378-.71 6.217-2.173 4.323-3.436 5.041-9.727 1.604-14.051-15.023-18.896-31.987-28.724-50.415-29.213z" />
                                        </Svg>

                                        <Text style={styles.menuItemText}>Породы собак</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.menuItem}
                                        onPress={this.redirectToDogFood}
                                    >

                                        <Svg
                                            style={styles.menuItemSvg}
                                            width={24}  height={24}
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 480 480"
                                            xmlSpace="preserve"
                                            enableBackground="new 0 0 480 480"
                                            fill="#b56422"

                                        >
                                            <Path d="M307.133 318.695v-157.39c20.061-2.161 37.073-10.243 49.609-23.667 13.489-14.445 20.918-34.565 20.918-56.654C377.661 36.33 341.435 0 296.909 0c-21.503 0-41.592 8.452-56.678 23.536C225.14 8.452 205.024 0 183.481 0c-44.626 0-80.932 36.33-80.932 80.984 0 21.644 8.326 41.97 23.445 57.233 12.928 13.052 29.551 21.108 47.561 23.208v157.161c-40.049 4.747-71.216 39.006-71.216 80.43 0 44.655 36.38 80.984 81.097 80.984 21.593 0 41.74-8.454 56.841-23.539C255.378 471.546 275.525 480 297.118 480c21.625 0 41.891-8.437 57.067-23.757 15.119-15.262 23.445-35.587 23.445-57.228 0-22.09-7.423-42.209-20.901-56.651-12.529-13.425-29.536-21.508-49.596-23.669zM297.118 460c-19.304 0-37.099-9.027-48.821-24.768a10 10 0 00-16.041 0C220.536 450.973 202.74 460 183.437 460c-33.689 0-61.097-27.357-61.097-60.984 0-33.302 26.725-60.456 59.774-60.983a10 10 0 0011.443-9.895V151.863a10 10 0 00-11.445-9.895c-32.93-.514-59.561-27.673-59.561-60.984 0-33.627 27.334-60.984 60.932-60.984 19.247 0 37.009 9.027 48.73 24.768a10 10 0 0016.041 0C259.974 29.027 277.71 20 296.909 20c33.499 0 60.752 27.357 60.752 60.984 0 36.566-23.804 60.471-60.644 60.902-5.477.065-9.883 4.523-9.883 10v176.229c0 5.477 4.406 9.935 9.883 10 36.821.43 60.614 24.336 60.614 60.902C357.63 432.643 330.485 460 297.118 460z" />
                                        </Svg>

                                        <Text style={styles.menuItemText}>Корм для собак</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.menuItem}
                                        onPress={this.redirectToQuestions}
                                    >

                                        <Svg
                                            style={styles.menuItemSvg}
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 115.031 122.88"
                                            xmlSpace="preserve"
                                            fill="#b56422"

                                        >
                                            <Path d="M68.987 7.718H27.143c-2.73 0-5.25.473-7.508 1.417-2.257.945-4.357 2.363-6.248 4.253-1.89 1.89-3.308 3.99-4.253 6.248-.945 2.257-1.417 4.778-1.417 7.508V67.99c0 2.73.472 5.25 1.417 7.508.945 2.258 2.363 4.357 4.253 6.248 1.942 1.891 4.043 3.359 6.3 4.252 2.258.945 4.726 1.418 7.456 1.418h17.956c2.101 0 3.833 1.732 3.833 3.832 0 .473-.105.893-.21 1.313-.683 2.521-1.418 5.041-2.258 7.455a92.938 92.938 0 01-2.888 7.352c-.525 1.207-1.155 2.361-1.837 3.57a72.264 72.264 0 0010.343-5.619 71.574 71.574 0 009.397-7.35c2.94-2.73 5.565-5.723 7.98-8.926a3.782 3.782 0 013.045-1.521H87.94c2.73 0 5.198-.473 7.455-1.418 2.258-.945 4.358-2.363 6.301-4.252 1.89-1.891 3.308-3.99 4.253-6.248.944-2.258 1.417-4.779 1.417-7.508V27.249c0-2.73-.473-5.25-1.417-7.508-.945-2.258-2.363-4.357-4.253-6.248s-3.99-3.308-6.248-4.252c-2.258-.945-4.777-1.418-7.508-1.418H68.987v-.105zm-7.282 47.97h-9.976V54.61c0-1.833.188-3.327.574-4.471a10.054 10.054 0 011.721-3.143c.762-.951 2.474-2.619 5.136-5.005 1.416-1.251 2.124-2.396 2.124-3.435 0-1.047-.287-1.852-.851-2.434-.574-.573-1.435-.864-2.59-.864-1.247 0-2.269.446-3.083 1.338-.816.883-1.335 2.444-1.561 4.657l-10.191-1.368c.349-4.054 1.711-7.314 4.078-9.787 2.376-2.473 6.015-3.706 10.917-3.706 3.818 0 6.893.863 9.24 2.58 3.184 2.338 4.778 5.441 4.778 9.321 0 1.61-.412 3.172-1.237 4.666-.815 1.493-2.501 3.327-5.037 5.48-1.766 1.523-2.887 2.735-3.353 3.657-.456.914-.689 2.116-.689 3.592zm-10.325 2.87h10.693v8.532H51.38v-8.532zM46.097.053H87.94c3.675 0 7.141.683 10.396 1.995 3.202 1.312 6.143 3.308 8.768 5.933 2.626 2.625 4.621 5.565 5.934 8.768 1.312 3.203 1.994 6.667 1.994 10.396V67.99c0 3.729-.683 7.193-1.994 10.396-1.313 3.201-3.308 6.141-5.934 8.768a27.583 27.583 0 01-8.768 5.932c-3.202 1.313-6.668 1.996-10.396 1.996H74.395a77.965 77.965 0 01-7.665 8.4 74.8 74.8 0 01-10.448 8.189 76.787 76.787 0 01-11.971 6.457c-4.2 1.838-8.715 3.361-13.44 4.621-1.365.367-2.835-.053-3.833-1.156-1.417-1.574-1.26-3.988.315-5.406 2.205-1.943 4.095-3.938 5.618-5.934 1.47-1.941 2.678-3.938 3.57-5.984v-.053a81.305 81.305 0 002.678-6.721c.263-.787.525-1.627.788-2.467H27.091c-3.675 0-7.14-.684-10.396-1.996-3.203-1.313-6.143-3.307-8.768-5.932-2.625-2.625-4.62-5.566-5.933-8.768C.682 75.078 0 71.613 0 67.938V27.091c0-3.676.682-7.141 1.995-10.396 1.313-3.203 3.308-6.143 5.933-8.768 2.625-2.625 5.565-4.62 8.768-5.933S23.363 0 27.091 0h18.953l.053.053z" />
                                        </Svg>


                                        <Text style={styles.menuItemText}>Пройти опрос</Text>
                                    </TouchableOpacity>



                                    <View style={styles.hamburger_menu_line}></View>

                                    <TouchableOpacity
                                        style={styles.menuItem}
                                        onPress={this.redirectToLogin}
                                    >
                                        <Svg style={styles.menuItemSvg} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path fillRule="evenodd" clipRule="evenodd" d="M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12c0 2.79-1.088 5.326-2.864 7.207a.5.5 0 00.728.686A11.462 11.462 0 0023.5 12C23.5 5.649 18.351.5 12 .5S.5 5.649.5 12c0 3.056 1.192 5.834 3.136 7.893a.5.5 0 10.728-.686A10.462 10.462 0 011.5 12zm11 3a.5.5 0 00-1 0v6.793l-2.146-2.147a.5.5 0 00-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L12.5 21.793V15zm-.5-2.5a.5.5 0 100-1 .5.5 0 000 1z" fill="#b56422"/>
                                        </Svg>

                                        <Text style={styles.menuItemText}>Выход</Text>
                                    </TouchableOpacity>



                                </View>
                            </View>
                            <TouchableOpacity style={{flex:1, height: '100%' }}
                                onPress={() => {this.closeModal()}}
                            >


                            </TouchableOpacity>
                        </View>

                    }




                {/*Open Menu Modal END*/}


                <LinearGradient colors={['#E1C1B7', '#FFFFFF']} style={styles.dogs_breeds_wrapper} >

                    <ScrollView style={styles.dogs_items_scrollView}>

                        {this.getDogs().map((dog, index) => {
                            return (

                                <TouchableOpacity style={styles.dog_img_info_main_wrapper} key={dog.id}  onPress={() => this.redirectToDogsBreedsSinglePage(dog)}>
                                    <View style={styles.dog_img_box}>
                                        <View style={styles.dog_img}>
                                            <Image style={styles.dog_img_child}  source={dog.img} />
                                        </View>

                                    </View>
                                    <View style={styles.dog_info_main_wrapper}>
                                        <Text style={styles.dog_info_title} >
                                            {dog.name}
                                        </Text>
                                        <Text style={styles.dog_info}> {dog.info} </Text>

                                    </View>
                                </TouchableOpacity>



                            );
                        })}


                    </ScrollView>

                </LinearGradient>


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
        paddingVertical: 50,
        paddingHorizontal: 20,
        flex:1
    },

    menuItem:{
        width: '100%',
        height: 48,
        paddingLeft: 25,
        flexDirection:'row',
        alignItems:'center'
    },
    menuItemSvg:{
        marginRight:20,
    },
    menuItemText:{
        color:'#1D1D20',
        fontSize:16
    },
    toptext: {
        fontSize: 20,
         color:  "#b56422",
        fontWeight:'bold'
    },
    dogs_items_scrollView: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    dog_img_child: {
        width: 150,
        height: 125,
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
    },
    dog_img: {
      marginRight: 10,
        width: 150,
        height: 125,

    },
    dog_img_info_main_wrapper: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        shadowColor: "#b56422",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.05,
        shadowRadius: 20,

        elevation: 8,
        borderRadius: 12,
        width: "100%",
        marginBottom: 15,

    },
    dog_info_main_wrapper: {
        paddingRight: 10,
        paddingTop: 20,
        flex: 1,
        flexDirection: "column",
        alignItems:'flex-start',
        justifyContent: "flex-start",
        height: 125,

    },
    dog_info_title: {
        color: "#b56422",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 10,
        width: "100%",
    },
    dog_info: {
        color: "#c9a477",
        fontSize: 12,
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

    },
    hamburger_menu_line: {
      width: "100%",
      height: 1,
      backgroundColor: "#f4f4f4",
        marginVertical: 20,
    },
});