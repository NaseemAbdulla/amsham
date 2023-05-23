import React,{ useState } from 'react'
import { useAppCont } from "../src/context/FirstContext";
import Anime from './splash'

class App extends React.Component {

  // state = {
  //   isTfReady: false
  // }

//   constructor(prop){
//     super(prop);
//     this.state = {
//         isModelReady: false,
//         useModel: {}
//     }; 
// };
// // function App(){
//    async componentDidMount() {
//      await tf.ready();
//      await tf.setBackend(BACKEND_CONFIG);

     

//      console.log("componentDidMount: tf.ready is set");

   

//     //  {
//     //   weightUrlConverter : async (weightFileName) => {
//     //         return `file://${RNFS.DocumentDirectoryPath}/${weightFileName}`;
//     // }}
   
     
   
//      const modelJSON = require('../assets/model/model.json');
//      const modelWeights = require('../assets/model/group1-shard1of1.bin');
//      model = await tf.loadGraphModel(bundleResourceIO(modelJSON, modelWeights)).catch((e)=>{
//       console.log("[LOADING ERROR] info:",e)});
   

//       const zeros = tf.zeros([1, 224, 224, 3]);
      
// // model.predict(zeros).print();
// this.setState({ model })
//       this.setState({
//         useModel: model,
//         isUSEReady: true,
//     });
    
  
     
    

//  //print out model.json and modelWeights
//  console.log("modelWeights: " + modelWeights);
//  console.log("modelJson: "+modelJSON);
//  Object.keys(modelJSON).forEach(function (item) {
//    console.log(item); // key
//    console.log(modelJSON[item]);
//  });

//  this.setState({
//   useModel: model,
//   isUSEReady: true
// });
//    }
//     //  model.summary();
     
//     //  console.log(model.calculateLosses())
    
     
 

   
render(){
     return (

        <Anime/>

     );
     }
    }
  

export default App

