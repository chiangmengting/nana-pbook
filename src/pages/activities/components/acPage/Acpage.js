import React from 'react'
import './acPage.scss'
import { connect } from 'react-redux'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const AcPage = props => {
  return (
    <>
      <div className="container acPage">
        <div
          class="banner"
          style={{ 'background-image': "url('images/test.jpg');" }}
        ></div>

        <header>
          <h1>我是活動名稱</h1>
        </header>

        <div class="row">
          <article class="col-md-8">
            我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文
            我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文
            我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文我是內文
          </article>
          <aside class="col-md-4">
            我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊我是資訊
          </aside>
        </div>

        <section class="recommend py-5">
          <h4 class="text-center pb-2">其他推薦</h4>
          <div class="row">
            <figure class="col-md-3">
              <h6 class="text-center">其他活動</h6>
              <a
                style={{ 'background-image': "url('images/test.jpg');" }}
                alt=""
              ></a>
            </figure>
            <figure class="col-md-3">
              <h6 class="text-center">其他活動</h6>
              <a
                style={{ 'background-image': "url('images/test.jpg');" }}
                alt=""
              ></a>
            </figure>
            <figure class="col-md-3">
              <h6 class="text-center">其他活動</h6>
              <a
                style={{ 'background-image': "url('images/test.jpg');" }}
                alt=""
              ></a>
            </figure>
            <figure class="col-md-3">
              <h6 class="text-center">其他活動</h6>
              <a
                style={{ 'background-image': "url('images/test.jpg');" }}
                alt=""
              ></a>
            </figure>
          </div>
        </section>
      </div>
    </>
  )
}
const mapStateToProps = state => ({
  listData: state.listData,
})
export default connect(mapStateToProps)(AcPage)
