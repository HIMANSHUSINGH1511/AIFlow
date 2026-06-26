import "./Features.css";
import features from "../../data/features";
import useBreakpoint from "../../hooks/useBreakpoint";
import { useState, useEffect } from "react";

function Features() {

    const mobile = useBreakpoint();

    const [active, setActive] = useState(0);

    useEffect(() => {

        // keeps active index during resize

    }, [mobile]);

    return (

<section
  id="features"
  data-aos="fade-up"
>

<div className="container">

<h2 className="feature-title">

Powerful Features

</h2>

{
mobile ?

<div className="accordion">

{

features.map((item,index)=>(

<div key={item.id} className="acc-item">

<button

className="acc-btn"

onClick={()=>setActive(index)}

>

{item.title}

</button>

<div

className={`acc-body ${active===index?"open":""}`}

>

<p>{item.desc}</p>

</div>

</div>

))

}

</div>

:

<div className="bento">

{

features.map((item,index)=>(

<div

key={item.id}

onMouseEnter={()=>setActive(index)}

className={`card ${item.size} ${active===index?"active":""}`}

>

<img
  src={item.icon}
  alt={item.title}
  className="feature-icon"
/>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

))

}

</div>

}

</div>

</section>

    );

}

export default Features;