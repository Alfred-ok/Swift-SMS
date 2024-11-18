import { CAlert, CButton, CCallout, CCard, CCardBody, CCardFooter, CCardHeader, CCardText, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CImage, CRow } from '@coreui/react'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthProvider';

function MpesaPayment() {
    const navigate = useNavigate();
    const {purchaseSmsUnit, setPurchaseSmsUnit} = useContext(AuthContext);

     //adding total
     const total = purchaseSmsUnit.quantity * purchaseSmsUnit.price;

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        navigate('/buy-now')
    }
    

  return (
    <>
        <CRow>
        <CCol xs={10} style={{margin:"12px auto"}}>
        <CCard style={{ boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)' }}>
            <CCardBody>
                <div style={{margin:"auto 0px", backgroundColor:"#0074d9",color:"#fff", height:"60px", borderRadius:"10px"}}>
                    <CRow>
                        <CCol>
                            <div style={{padding:"15px 25px", fontSize:"20px"}}>
                                Payment Date:  12/10/2024 15:17:29
                            </div>
                        </CCol>
                        <CCol>
                            <div style={{display:'flex', justifyContent:'end', alignItems:'center', padding:"15px 25px", fontSize:"20px" }}>
                                Sms Total:  {total}
                            </div>
                        </CCol>
                    </CRow>
                </div>
                <CCardText style={{padding:"15px 20px"}}> 
                
                   <p><CImage src='src/assets/images/m-pesa.png' height={81}/></p> 
                   <p>1. Go to the M-PESA menu on your phone </p> 
                   <p>2. Select Buy Goods and Services Option</p>
                   <p>3. Enter the following till number: 5592679</p> 
                   <p>4. Enter the total amount (KSh.{total} )</p>
                   <p>5. Enter your PIN and then send the money</p> 
                   <p>6. You will receive a transaction confirmation SMS from M-PESA</p>
                   <p>7. Enter your M-PESA Confirmation Code only here below:</p> 
                
                </CCardText>
                <CCardFooter>
                <CCallout color="success">
                    <h5>Enter Payment Details</h5>
                    <CForm onSubmit={handleSubmit}>
                    <div className="mb-3">
                          <CFormLabel htmlFor="exampleFormControlInput1">Mpesa Code</CFormLabel>
                          <CFormInput
                              type="text" 
                              id="exampleFormControlInput1"
                              placeholder="Mpesa Code"
                              style={{  borderColor: "rgba(71, 71, 212,0.6)", width:"40%" }}

                            />
                           <div className="col-auto">
                            <CButton color="success" type="submit" style={{marginTop:"20px", color:"#fff"}}>
                                Confirm
                            </CButton>
                        </div>
                        </div>
                    </CForm>   
                </CCallout>
                </CCardFooter>
            </CCardBody>
        </CCard>
        </CCol>
        </CRow>
    </>
  )
}

export default MpesaPayment