import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CCol,
  CContainer,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import MainChart from './MainChart'

import NetworkChartLine from './NetworkChartLine'
import NetworkPieChart from './NetworkPieChart'
//import { auto } from '@popperjs/core'
//import DeliveryReportBar from './DeliveryReportBar'
//import DeliveryReportPieChart from './DeliveryReportPieChart'
//import SenderIdBarChart from './SenderIdBarChart'
//import SenderIdPieChart from './SenderIdPieChart'

const Dashboard = () => {
  

  return (
    <>
      <CContainer>
        <CRow className="justify-content-center" >
            <CCol xs={9} md={9} sm={9}>
              <CCard style={{ boxShadow:'0px 7px 29px 0px  rgba(100, 100, 111, 0.2)',border: 'solid 1px rgb(179, 177, 177)'}}>
                <CCardBody>
                  <CCardTitle>
                    <h4 style={{padding: "10px"}}>NETWORK ACTIVITY</h4>
                  </CCardTitle>
                  <NetworkChartLine/>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs={3} md={3} sm={3}>
              <CCard style={{boxShadow:'0px 7px 29px 0px  rgba(100, 100, 111, 0.2)', backgroundColor:'#fff'}}>
                <CCardHeader>
                  <h6>NETWORK ACTIVITY - This Month</h6>
                </CCardHeader>
                <NetworkPieChart/>
              </CCard>   
            </CCol>
        </CRow>     
      </CContainer>
      

      
    </>
  )
}

export default Dashboard
