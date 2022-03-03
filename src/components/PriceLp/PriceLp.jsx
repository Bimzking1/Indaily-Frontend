import React from "react";
import "./PriceLp.css";
function PriceLp() {
  return (
    <div className="pl-container">
      <h2 className="pl-title">Harga</h2>
      <div className="plan-options">
        <div className="plan">
          <div className="plan-header">
            <h5 className="tag">Normal</h5>
            <h3>
              <span className="plan-amount">Rp.3.000.000</span> <span className="plan-duration">/bulan</span>
            </h3>
            <h3 className="plan-heading">PRO</h3>
            {/*     <button class="plan-save"> Save $40</button> */}
          </div>
          <ul className="plan-feature">
            <li>Upload Video up to 720p Resolution</li>
            <li>Attachment &amp; Post Scheduling</li>
            <li>Set your rates</li>
            <li>Exclusive Deals</li>
            <li>Advanced Statistics</li>
            <li>Advanced Statistics</li>
          </ul>
          <button className="plan-choose">Pilih Paket</button>
        </div>
        <div className="plan">
          <div className="plan-header">
            <h5 className="tag">Normal</h5>
            <h3>
              <span className="plan-amount">Rp.399.000</span> <span className="plan-duration">/bulan</span>
            </h3>
            <h3 className="plan-heading">PRO</h3>
            {/*     <button class="plan-save"> Save $40</button> */}
          </div>
          <ul className="plan-feature">
            <li>Upload Video up to 720p Resolution</li>
            <li>Attachment &amp; Post Scheduling</li>
            <li>Set your rates</li>
            <li>Exclusive Deals</li>
            <li>Advanced Statistics</li>
            <li>Advanced Statistics</li>
          </ul>
          <button className="plan-choose">Pilih Paket</button>
        </div>
      </div>
    </div>
  );
}

export default PriceLp;
