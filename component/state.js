import { Dropdown } from 'react-native-material-dropdown';
import React from  'react'; 
export default function Examle() {
    const [sta,setState] = React.useState('')
        let data = [{
            value: '>.......................................state.....................................<'
        },{
            value:'Andra Pradesh' ,
        } ,{
            value: 'ArunachalPradesh',
        
        },{
            value: 'Assam',
        },{
            value: 'Bihar',
        },{
            value: 'Chhattisgarh',
        },{
            value: 'Goa',
        },{
            value: 'Gujarat',
        },{
            value: 'Haryana',
        },{
            value:'Himachal Pradesh' ,
        },{
            value: 'Jammu and Kashmir',
        },{
            value: 'Jharkhand' ,
        },{
            value: 'Karnataka',
        },{
            value: 'Kerala',
        },{
            value: 'Madhya Pradesh',
        },{
            value: 'Maharashtra',
        },{
            value: 'Manipur',
        },{
            value: 'Meghalaya',
        },{
            value:'Mizhoram' ,
        },{
            value: 'Nagaland',
        },{
            value: 'Odisha',
        },{
            value: 'Punjab',
        },{
            value: 'Rajasthan',
        },{
            value: 'Sikkim',
        },{
            value: 'Tamil Nadu',
        },{
            value: 'Telangana',
        },{
            value: 'Tripura',
        },{
            value:'Uttar Pradesh' ,
        },{
            value: 'Uttarakhand',
        },{
            value: 'West Bengal',
        }];
    

    return(
        <Dropdown
        data={data}
        onChangeText={props => setState(sta)}
        value={sta}
        />
    );
    

}