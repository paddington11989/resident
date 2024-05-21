import Building from "./components/building/building";
import Company from "./components/company/company";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Interview from "./components/interview/interview";
import Popular from "./components/popular/popular";
import Products from "./components/products/products";
import Rest from "./components/rest/rest";


function App() {
  return (
    <div className="App">
      <Header/>
      <Popular/>
      <Building/>
      <Rest/>
      <Interview/>
      <Products/>
      <Company/>
      <Footer/>
    </div>
  );
}

export default App;
