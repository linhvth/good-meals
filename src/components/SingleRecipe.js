import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

const SingleRecipe = () =>{
  let { slug } = useParams()
  const qs = require('qs');
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: '*',
  }, {
    encodeValuesOnly: true,
  });

  const [event, setEvent] = useState([])
  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/events?${query}`)
      setEvent(res.data.data)
    }

    fetchEvent()
  }, [])


  const FeatureImg = (imgsrc) => {
    const image = imgsrc.imgsrc.data
      ? imgsrc.imgsrc.data.attributes.url
      : dummy;
    
    return (
      <img src={image} width="100%" className="my-4"/>
    )
  }

  return(
    <div className="pt-4 container col-lg-7">
      {event
      .map(({attributes}) =>
        <div>
          <SectionHeader text={ attributes.name } className="mt-5"/>
          <FeatureImg imgsrc={ attributes.featureImage }/>
          <ReactMarkdown className="my-4" components={{img:({src, ...props}) =>{
            console.log(src);
            return <img src={src} width="100%" className="my-4"/> }}}>
            {attributes.description}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )

}

export default SingleRecipe;
