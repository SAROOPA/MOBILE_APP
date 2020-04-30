import React  from 'react';
import { StyleSheet , View, Button ,TextInput, Text, TouchableWithoutFeedback,keyboard, ScrollView} from 'react-native';
import {Formik, Form} from 'formik';
import * as yup from 'yup';
import Select from 'react-native-picker-select';

const em = /\s.\@\s+\.\s+ /;

const Schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().matches(em,'email is not valid'),
  password: yup.string().required().min(6),
  confirmPassword: yup.string().required().oneOf([yup.ref('pw'),null] , 'password must match'),
  number: yup.string().required().min(10).max(10),
  })

export default function ReviewForm() {
    return(
      <ScrollView>

      <TouchableWithoutFeedback onPress={() => {keyboard.dismiss();}}>
        
        <Formik 
        initialValues={{name : '' , email : '' , password :'' , confirmPassword :'' ,number :'', state : ''}}
        validationSchema={Schema}
        onSubmit = {(values) =>{console.log(values); }}
        >


        {(props) => (
          <View>
            <Text style={styles.text}>NAME:</Text>
            <TextInput 
            style={styles.input}
            placeholder='NAME'
            onChangeText={props.handleChange('name')}
            value={props.values.name} />
            <Text style={styles.errp}>{props.touched.name && props.errors.name}</Text>
            <Text style={styles.text} > EMAIL-ID:</Text>
            <TextInput 
            style={styles.input}
            placeholder='EMAIL-ID'
            onChangeText={props.handleChange('email')}
            value={props.values.email}/>
            <Text style={styles.errp}>{props.touched.email && props.errors.email}</Text>
            <Text style={styles.text}>PASSWORD:</Text>
            
            <TextInput 
            style={styles.input}
            placeholder='PASSWORD'
            onChangeText={props.handleChange('password')}
            value={props.values.password}/>
            <Text style={styles.errp}>{props.touched.password && props.errors.password}</Text>
            <Text style={styles.text}>CONFIRM PASSWORD:</Text>
            
            <TextInput 
            style={styles.input}
            placeholder='CONFIRM PASSWORD'
            onChangeText={props.handleChange('confirmPassword')}
            value={props.values.confirmPassword}/>
             <Text style={styles.errp}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
             <Text style={styles.text}>NUMBER:</Text>
           
            <TextInput 
            keyboardType='numeric'
            style={styles.input}
            placeholder='NUMBER'
            onChangeText={props.handleChange('number')}
            value={props.values.number}/>
            <Text style={styles.errp}>{props.touched.number && props.errors.number}</Text>
            <Text style={styles.text}>STATE:</Text>
            <Select
            
            placeholder={{label : 'SELECT STATE',value:null}}
            onValueChange={props.handleChange('state')}
            items={[{
              label:'Andra Pradesh',
              value:'Andra Pradesh' ,
              } ,
             {
              label:'ArunachalPradesh',
              value: 'ArunachalPradesh',
          
            },
            {  label:'Assam',
              value: 'Assam',
            },
            {  label:'Bihar',
              value: 'Bihar',
            },
            {  label:'Chhattisgarh',
              value: 'Chhattisgarh',
            },
           {  label:'Goa',
               value: 'Goa',
           },
           {  label:'Gujarat',
              value: 'Gujarat',
           },
           {
            label:'Haryana',
            value: 'Haryana',
          },
          {  label:'Himachal Pradesh',
              value:'Himachal Pradesh' ,
          },
          {  label:'Jammu and Kashmir',
              value: 'Jammu and Kashmir',
          },
          {  label:'Jharkhand',
              value: 'Jharkhand' ,
          },
          {  label:'Karnataka',
              value: 'Karnataka',
          },
          {  label:'Kerala',
              value: 'Kerala',
          },
          {  label:'Madhya Pradesh',
              value: 'Madhya Pradesh',
          },
          {  label:'Maharashtra',
              value: 'Maharashtra',
          },
          {  label:'Manipur',
              value: 'Manipur',
          },
          {  label:'Meghalaya',
              value: 'Meghalaya',
          },
          {  label:'Mizhoram',
              value:'Mizhoram' ,
          },
          {  label:'Nagaland',
              value: 'Nagaland',
          },
          {  label:'Odisha',
              value: 'Odisha',
          },
          {  label:'Punjab',
              value: 'Punjab',
          },
          {  label:'Rajasthan',
              value: 'Rajasthan',
          },
          {  label:'Sikkim',
              value: 'Sikkim',
          },
          {label:'Tamil Nadu',
              value: 'Tamil Nadu',
          },
          {label:'Telangana',
              value: 'Telangana',
          },
          {label:'Tripura',
              value: 'Tripura',
          },
          {label:'Uttar Pradesh',
              value:'Uttar Pradesh' ,
          },
          {label:'Uttarakhand',
              value: 'Uttarakhand',
          },
          {label:'West Bengal',
              value: 'West Bengal',
          }]
        }/>
             
            <Button title='SUBMIT' color='maroon' onPress={props.handleSubmit}/>

          </View>

)}</Formik>
        
      </TouchableWithoutFeedback>
      </ScrollView>
      
    
    
      ) }

const styles = StyleSheet.create({
  
 text:{
     fontFamily:'serif',
     color:'purple',
     fontWeight:'bold',
     marginTop: 10,
     fontSize:18
  },
 input:{
      borderColor: 'black',
      borderWidth: 1,
      margin:10,
      padding:5,
      fontSize: 18,
      borderRadius: 6,
 },
 errp:{
      color: 'red',
      alignItems: 'center'
 }
});

