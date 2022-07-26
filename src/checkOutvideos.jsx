import React from 'react'

const checkOutvideos = () => {
  return (
    <>
      <section class="main_heading my-5 py-2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-xxl-12 py-5 offer_style text-center">
            <h1>Check Out My Videos</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              illo deserunt reiciendis quibusdam, eum magnam.
            </p>
            <a href="https://getbootstrap.com/" target="_bootstrap">
              <button
                type="button"
                class="btn btn-outline-light"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                Check More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default checkOutvideos