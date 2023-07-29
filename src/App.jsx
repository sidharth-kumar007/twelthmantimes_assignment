import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container custom-container">
        <div class="row g-5">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card card-custom">
              <div class="card-body">
                <h4 class="card-title text-center card-title-custom">$10/mth</h4>
                <h5 class="card-subtitle mb-2 text-secondary-emphasis text-center">Basic Plan</h5>
                <h6 class="card-subtitle mb-2 text-secondary text-center">Billed Annualy</h6>
                <div class="mt-4">
                  <ul>
                    <li class="d-flex align-items-center"><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi thereasdasdasdasda</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card card-custom">
              <div class="card-body">
                <h4 class="card-title text-center card-title-custom">$20/mth</h4>
                <h5 class="card-subtitle mb-2 text-secondary-emphasis text-center">Business Plan</h5>
                <h6 class="card-subtitle mb-2 text-secondary text-center">Billed Annualy</h6>
                <div class="mt-4">
                  <ul>
                    <li class="d-flex align-items-center"><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card card-custom">
              <div class="card-body">
                <h4 class="card-title text-center card-title-custom">$40/mth</h4>
                <h5 class="card-subtitle mb-2 text-secondary-emphasis text-center">Enterprise Plan</h5>
                <h6 class="card-subtitle mb-2 text-secondary text-center">Billed Annualy</h6>
                <div class="mt-4">
                  <ul>
                    <li class="d-flex align-items-center"><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                    <li><img class="feature-list" src="src/assets/check.svg" alt="" />Hi there</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
