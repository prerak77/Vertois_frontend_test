import "bootstrap/dist/css/bootstrap.min.css";
const ReportTemplate = (Details) => {
  return (
    <>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        ></link>
      </head>
      <div class="container" id="main">
        <div class="main">
          <div class="CompanyTitle">
            <h1>VERTOIS</h1>
          </div>

          <div>
            <h3>Business Responsibility & Sustainability Report</h3>
          </div>
        </div>

        <div class="section-a">
          <h5>SECTION A: GENERAL DISCLOSURES</h5>
        </div>

        <div class="">
          <h6>I. Details of the listed entity</h6>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <p class="EntryTitle">
                Corporate Identity Number (CIN) of the Listed Entity:{" "}
              </p>
              <p style={{ display: "inline" }}>CIN </p>
            </div>
            <div class=" col-sm">
              <p class="EntryTitle">Name of the Listed Entity:</p>
              <p>The Tata Power Company Limited</p>
            </div>
            <div class=" col-sm">
              <p class="EntryTitle">Year of incorporation: </p>
              <p style={{ display: "inline" }}>1919 </p>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class=" col-sm">
              <p class="EntryTitle">Registered office address:</p>
              <p>
                Bombay House, 24, Homi Mody Street, Mumbai - 400 001,
                Maharashtra, India
              </p>
            </div>
            <div class=" col-sm">
              <p class="EntryTitle">Corporate address: </p>
              <p>
                {" "}
                Corporate Center, 34 Sant Tukaram Road, Carnac Bunder, Mumbai -
                400 009, Maharashtra, India
              </p>
            </div>
            <div class=" col-sm">
              <p class="EntryTitle">E-mail: </p>
              <p style={{ display: "inline" }}>tatapower@tatapower.com </p>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class=" col-sm">
              <p class="EntryTitle">Telephone: </p>
              <p style={{ display: "inline" }}> 022-6665 8282</p>
            </div>
            <div class=" col-sm">
              <p class="EntryTitle">Website:</p>
              <p style={{ display: "inline" }}>www.tatapower.com</p>
            </div>
            <div class=" col-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportTemplate;
