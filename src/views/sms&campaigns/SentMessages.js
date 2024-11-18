import { CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CPagination, CPaginationItem, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import 'ldrs/waveform'
import Cookies from 'js-cookie';


function SentMessages() {

    const groupID = Cookies.get('groupId');

    const [loading, setLoading] = useState(false);
    const [messageData, setMessagedata] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);  // Current page number
    const itemsPerPage = 10;  // Items per page
  
    // Calculate number of pages
    const pageCount = Math.ceil(messageData.length / itemsPerPage);
  
    // Get the data for the current page
    const currentData = messageData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    // Handle page change
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    useEffect(()=>{
        //...loading
        setLoading(false)

        try{

            fetch(`${import.meta.env.VITE_BASE_URL}get_code/${groupID}`)
            .then((data)=>{
                console.log(data);
                return data.json();
            })
            .then((response)=>{
                console.log(response)
                setMessagedata(response);
                setLoading(true)
                  
            }).catch(err=> setLoading(true))
            
            
        }catch (error) {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
            
        }
        

    },[])
   
      
  return (
    <>
         <CCard style={{marginBottom:'30px', boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)' }}>
            <CCardBody>
                <CCardTitle>
                    <h4>Sent Messages</h4>
                </CCardTitle>
                
                     
                    <CForm>
                    <CRow>
                        <CCol>
                            <div>
                            <CFormLabel htmlFor="exampleFormControlInput1">Destination</CFormLabel>
                            <CFormInput
                                type="number"
                                id="exampleFormControlInput1"
                                placeholder="2547XXXXXXXX, 2547XXXXXXXX"
                            />
                            </div>
                        </CCol>
                        <CCol>
                            <div>
                            <CFormLabel htmlFor="exampleFormControlInput1">Sender ID</CFormLabel>
                            <CFormInput
                                type="text"
                                id="exampleFormControlInput1"
                                placeholder="Sender Id"
                            />
                            </div>
                        </CCol>
                    
                       
                        <CCol>
                            <div>
                            <CFormLabel htmlFor="exampleFormControlInput1">From</CFormLabel>
                            <CFormInput
                                type="Date"
                                id="exampleFormControlInput1"
                                placeholder="From"
                            />
                            </div>
                        </CCol>
                        <CCol>
                            <div>
                            <CFormLabel htmlFor="exampleFormControlInput1">To</CFormLabel>
                            <CFormInput
                                type="Date"
                                id="exampleFormControlInput1"
                                placeholder="To"
                            />
                            </div>
                        </CCol>
                        <CCol>
                            <div style={{marginTop:"30px"}}>
                                <CButton color="primary" type="submit" className="mb-3">
                                    SUBMIT
                                </CButton>
                            </div>
                        </CCol>
                        </CRow>
                        
                    </CForm>

                {
                  loading && loading ?
                      (
                    <>    
                    <CTable bordered style={{marginTop: '40px'}}>
                        <CTableHead>
                        <CTableRow color='dark' style={{textAlign:'center'}}>
                            <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Source</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Destination</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Message</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Rate</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Status</CTableHeaderCell>

                        </CTableRow>
                        </CTableHead>
                        {currentData && 
                            currentData.map((data, idx)=>(
                                <CTableBody key={data.id}>
                                <CTableRow style={{textAlign:'center'}}>
                                    <CTableHeaderCell scope="row">{data.id}</CTableHeaderCell>
                                    <CTableDataCell>{data.code}</CTableDataCell>
                                    <CTableDataCell>{data.phoneNumber}</CTableDataCell>
                                    <CTableDataCell>{data.message}</CTableDataCell>
                                    <CTableDataCell>{data.msgStatus}</CTableDataCell>
                                    <CTableDataCell>{data.sendStatus}</CTableDataCell>
                                </CTableRow>    
                                </CTableBody>
                            )) 
                        
                        } 
   
                    </CTable>
                   
                      
                        
                    <CPagination align="center" aria-label="Page navigation example">
                        <CPaginationItem  disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                            Previous
                        </CPaginationItem>
                        {[...Array(pageCount)].map((_, i) => (
                            <CPaginationItem
                            key={i}
                            active={i + 1 === currentPage}
                            onClick={() => handlePageChange(i + 1)}
                            >
                            {i + 1}
                            </CPaginationItem>
                        ))}
                        
                        <CPaginationItem  disabled={currentPage === pageCount} onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </CPaginationItem>
                    </CPagination>
                    </>
                    )
                   :
                   (
                    <div style={{display:"flex", justifyContent:"center", alignItems:"end", color:"black", width:"100%", marginTop:'30px'}}>
                             
                            <l-waveform size="35" stroke="3.5" speed="1" color="black" ></l-waveform>
                            <h3 style={{marginLeft:"20px"}}>Loading</h3> 
                    </div>
                   )
                }
                       
                  
            </CCardBody>
        </CCard>
    </>
  )
}

export default SentMessages