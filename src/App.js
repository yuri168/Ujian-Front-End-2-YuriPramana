import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
        Jenjang: 'Pilih Jenjang',
        Tingkatan: 'Pilih Tingkatan',

        drop1: '',
        drop2: '',
        drop3: '',
        drop4: '',
    };
  }

  klik(jenjangpend){
    this.setState({Jenjang: jenjangpend},()=>{
      console.log(this.state.Jenjang)
    })
   }
   klik2(asd){
    this.setState({Tingkatan: asd},()=>{
      console.log(this.state.Tingkatan)
    })
   }
  tingkat() {
    
    if ( this.state.Jenjang === 'Pendidikan Pra Sekolah'){
      
    
      this.setState({drop1: 'PAUD (Pendidikan Anak Usia Dini)'})
      this.setState({drop2: 'TK (Taman Kanak-kanak)'})  
      this.setState({drop3: 'RA (Raudhatul Athfal)'})  
      
    }
    else if ( this.state.Jenjang === 'Pendidikan Dasar'){
      
    
      this.setState({drop1: 'SD (Sekolah Dasar)'})
      this.setState({drop2: 'MI (Madrasah Ibtidaiyah)'})  
      this.setState({drop3: 'SMP (Sekolah Menengah Pertama)'})  
      this.setState({drop4: 'MTs (Madrasah Tsanawiyah)'})
    }
    else if ( this.state.Jenjang === 'Pendidikan Menengah'){
      
    
      this.setState({drop1: 'SMA (Sekolah Menengah Atas)'})
      this.setState({drop2: 'MA (Madrasah Aliyah)'})    
      this.setState({drop3: 'SMK (Sekolah Menengah Kejuruan)'})
    }
    else if ( this.state.Jenjang === 'Pendidikan Tinggi'){
      
    
      this.setState({drop1: 'D3 Diploma'})
      this.setState({drop2: 'S1/D4 Sarjana'})  
      this.setState({drop3: 'S2 Magister'})  
      this.setState({drop4: 'S3 Doktoral'})
    }
    else {
      this.setState({Tingkatan: 'Pilih Jenjangnya Dulu!'})
    }
  }

  render() {
  
    return (
      <div>
        
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
             {this.state.Jenjang} &nbsp;
            <span className="caret"></span>
          </button>
          <ul  className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a  ref="pendidikan" value="Pendidikan Pra Sekolah" onClick={()=>{this.klik('Pendidikan Pra Sekolah');}}>Pendidikan Pra Sekolah</a></li>
            <li><a  ref="pendidikan" value="Pendidikan Dasar" onClick={()=>{this.klik('Pendidikan Dasar');}}>Pendidikan Dasar</a></li>
            <li><a  ref="pendidikan" value="Pendidikan Menengah" onClick={()=>{this.klik('Pendidikan Menengah');}}>Pendidikan Menengah</a></li>
            <li><a  ref="pendidikan" value="Pendidikan Tinggi" onClick={()=>{this.klik('Pendidikan Tinggi');}}>Pendidikan Tinggi</a></li>
          </ul>
        </div>
       
        <div className="dropdown">
          <button onClick={()=>{this.tingkat();}} className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          {this.state.Tingkatan} &nbsp;
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li className="dropdown-header"></li>
          <li><a onClick={()=>{this.klik2(this.state.drop1);}}>{this.state.drop1}</a></li>
          <li><a onClick={()=>{this.klik2(this.state.drop2);}}>{this.state.drop2}</a></li>
          <li><a onClick={()=>{this.klik2(this.state.drop3);}}>{this.state.drop3}</a></li>
          <li><a onClick={()=>{this.klik2(this.state.drop4);}}>{this.state.drop4}</a></li>
          </ul>
          </div>
          </div>
    );
  }
}

export default App;
