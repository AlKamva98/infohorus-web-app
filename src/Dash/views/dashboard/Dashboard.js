import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
} from '@coreui/react'
import WidgetsDropdown from '../components/widgets/WidgetsDropdown.js'

const Dashboard = (props) => {
  const {news} = props;
  let hasReport = false;
 
  return (
    <>
      {hasReport && <WidgetsDropdown />}
      
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Latest News Reports</strong>
          </CCardHeader>
          <CCardBody>
            {news ? (news.map((article, index)=>{
              //  var imgUrl =article.provider[0].image.thumbnail.contentUrl;
               console.log(article, index)
      return(<>
            <div className="flex m-3 py-4 px-4 shadow-md rounded-lg bg-gray-200">
              {/* {imgUrl &&
              <img className="w-40 h-40 mr-4" src={imgUrl}/>
              } */}
              <div>
            <h5 className="text-lg font-semibold">{article.name}</h5>    
            <p className="text-medium-emphasis small">
              {article.description}
              <a href={article.url} target="_blank">
                read more
              </a>
              .
            </p>
            <p className="text-medium-emphasis small font-semibold">Source: {article.provider[0].name}</p>
            <p className="text-medium-emphasis small font-semibold">published: {article.datePublished.slice(0, 10)}</p>            
            </div>
            </div>
           </>)})): <p>Articles Unavailable</p>}
            </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default React.memo(Dashboard)
