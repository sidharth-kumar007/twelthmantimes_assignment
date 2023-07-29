import { useState } from 'react'
import checkMark from "./assets/check.svg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container custom-container">
        <div class="row g-5">
          <div class="col">
            <div class="card card-custom">
              <div class="card-body">
                <h4 class="card-title text-center card-title-custom">$10/mth</h4>
                <h5 class="card-subtitle mb-2 text-secondary-emphasis text-center">Basic Plan</h5>
                <h6 class="card-subtitle mb-2 text-secondary text-center">Billed Annualy</h6>
                <div class="mt-4">
                  <ul>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Access to all basic features</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Basic Reporting and Analytics</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Upto 10 individual users</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />20GB individual data each user</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Basic chat and email support</li>
                  </ul>
                </div>
                <a href="#" class="d-flex btn btn-primary  justify-content-center card-button card-button">Get started</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-custom">
              <div class="card-body">
                <h4 class="card-title text-center card-title-custom">$20/mth</h4>
                <h5 class="card-subtitle mb-2 text-secondary-emphasis text-center">Business Plan</h5>
                <h6 class="card-subtitle mb-2 text-secondary text-center">Billed Annualy</h6>
                <div class="mt-4">
                  <ul>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />200+ integrations</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Advanced reporting and analytics</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Upto 20 individual users</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />40GB individual data each user</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Priority chat and email</li>
                  </ul>
                </div>
                <a href="#" class="d-flex btn btn-primary  justify-content-center card-button">Get started</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-custom">
              <div class="card-body">
                <h4 class="card-title text-center card-title-custom">$40/mth</h4>
                <h5 class="card-subtitle mb-2 text-secondary-emphasis text-center">Enterprise Plan</h5>
                <h6 class="card-subtitle mb-2 text-secondary text-center">Billed Annualy</h6>
                <div class="mt-4">
                  <ul>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Advanced Custom fieldsss</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Audit log and data history</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Unlimited indidvidual user</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Unlimited indidvidual data</li>
                    <li class="d-flex align-items-center"><img class="feature-list" src={checkMark} alt="" />Personalised+priority service</li>
                  </ul>
                </div>
                <a href="#" class="d-flex btn btn-primary  justify-content-center card-button">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
