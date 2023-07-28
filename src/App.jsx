import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">10$/mth</h4>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Special title treatment 2</h4>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Special title treatment 3</h4>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
