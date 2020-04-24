import React  from 'react';
import { StyleSheet , View, Button ,TextInput, Text, TouchableWithoutFeedback,keyboard, ScrollView} from 'react-native';
import {Formik, Form} from 'formik';
import * as yup from 'yup';
import Example from './state';

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
        initialValues={{name : '' , email : '' , password :'' , confirmPassword :'' ,number :''}}
        validationSchema={Schema}
        onSubmit = {(values) =>{console.log(values); console.log(sta);}}
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
            <Example />
            <Button title='SUBMIT' color='maroon' onPress={props.handleSubmit}/>
          </View>

        )}</Formik>
        
      </TouchableWithoutFeedback>
      </ScrollView>
      
    
    
     ) }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
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

