import { useState } from 'react'
import checkMark from "./assets/check.svg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-center m-5">Pricing Table Assignment</h1>
      <div class="container custom-container">
        <div class="row g-5">
          <div class="col">
            <div tabIndex="1" class="card card-custom">
              <div class="card-body">
                <h2 class="card-title text-center card-title-custom">$10/mth</h2>
                <h3 class="card-subtitle mb-2 text-secondary-emphasis text-center fs-4">Basic Plan</h3>
                <h4 class="card-subtitle mb-2 text-secondary text-center fs-6">Billed Annualy</h4>
                <div class="mt-4">
                  <ul>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Access to all basic features</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Basic Reporting and Analytics</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Upto 10 individual users</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />20GB individual data each user</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Basic chat and email support</li>
                  </ul>
                </div>
                <a href="#" class="d-flex btn btn-primary  justify-content-center card-button card-button" aria-label="Get started with Basic plan">Get started</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div tabIndex="1" class="card card-custom">
              <div class="card-body">
                <h2 class="card-title text-center card-title-custom">$20/mth</h2>
                <h3 class="card-subtitle mb-2 text-secondary-emphasis text-center fs-4">Business Plan</h3>
                <h4 class="card-subtitle mb-2 text-secondary text-center fs-6">Billed Annualy</h4>
                <div class="mt-4">
                  <ul>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />200+ integrations</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Advanced reporting and analytics</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Upto 20 individual users</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />40GB individual data each user</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Priority chat and email</li>
                  </ul>
                </div>
                <a href="#" class="d-flex btn btn-primary  justify-content-center card-button" aria-label="Get started with Business plan">Get started</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div tabIndex="1" class="card card-custom">
              <div class="card-body">
                <h2 class="card-title text-center card-title-custom">$40/mth</h2>
                <h3 class="card-subtitle mb-2 text-secondary-emphasis text-center fs-4">Enterprise Plan</h3>
                <h4 class="card-subtitle mb-2 text-secondary text-center fs-6">Billed Annualy</h4>
                <div class="mt-4">
                  <ul>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Advanced Custom fieldsss</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Audit log and data history</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Unlimited indidvidual user</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Unlimited indidvidual data</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Personalised+priority service</li>
                  </ul>
                </div>
                <a href="#" class="d-flex btn btn-primary  justify-content-center card-button" aria-label="Get started with Enterprise plan">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
