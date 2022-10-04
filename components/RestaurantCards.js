import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'
import Icon from 'react-native-vector-icons/Entypo';

const RestaurantCards = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
  return (
    <TouchableOpacity style={{backgroundColor: '#fff', marginRight: 10, shadowColor: 'gray'}}>
      <Image 
       source= {{
        uri: imgUrl
       }}
       style={{height: 90, width: 150}}
       
       />

       <View style={{paddingHorizontal: 3, paddingBottom: 4}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, paddingTop: 2}}>Yo! Sushi</Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <StarIcon color='green' opacity={0.5} size={22}/>
            <Text style={{marginLeft: 3, color: 'gray', fontSize: 12}}> <Text style={{color: 'green'}}>4.5</Text> . Japanese</Text>
        </View>

        <View style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="location-pin" size={22} color='gray' opacity={0.5} />
            <Text style={{color: 'gray', fontSize: 12}}>Nearby . Wabera Street</Text>
        </View>
       </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards

const styles = StyleSheet.create({})