import React, { Component } from 'react'

class Showhide extends Component {

        state={
            btnshow:false
        }
    handleShow=()=>{
        this.setState({
            btnshow:!this.state.btnshow
        })
    }

    render() {
        let {btnshow}=this.state    
        return (
            <>
            <div>
            <div className="title">
               <h3> ĐỊA CHỈ KHÁM BỆNH </h3>
               <p>Bệnh viện đa khoa hồng phát</p>
               <span>
                   219 Lê Duẫn -ĐN
               </span>
            </div>
            <div className="show">
               <h5> LOẠI BẢO HIỂM ÁP DỤNG </h5>
                <div className="chitiet">
                {btnshow &&    
                <>
                <button onClick={()=>this.handleShow()}>Thu gon</button>
                <h4>Bảo hiểm Y tế nhà nước</h4>
                <p>Áp dụng cho bệnh nhân đăng ký KCB ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác.</p>
   </>
    }
                </div>
                <div>
                  {btnshow === false && <button onClick={()=>this.handleShow()}>Hien thi</button>}
                </div>
            </div>
            </div>
            </>
        )
    }
}
export default Showhide
