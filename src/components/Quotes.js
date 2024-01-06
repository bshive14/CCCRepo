import Ashish from "./Ashish";
export default function Quotes()
{
    return(
        <div>
            <div class="card mb-3" style={{'max-width':'540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="as.jpg" align="left" width={100} height={100} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{fontSize:'14pt',color:'maroon',fontFamily:'Times New Roman'}}>Sr. Developer & Entrepreneur <br/>Ashish Vaish</h5>
        <p class="card-text"><Ashish/></p>
        <p class="card-text"><small class="text-body-secondary"></small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}