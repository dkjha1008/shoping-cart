<template>
      <header id="header">
          <div class="main-header-sec">
             <div class="toggle-left">
                <span class="toggle-icn"><i class="fas fa-bars"></i></span>
             </div>
             <div class="user-account">
               <div class="dropdown">
                  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                     <span class="circle-user-name">JS</span>
                     <span class="user-name">Justin Shepp</span>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                  </div>
                </div>
             </div>
          </div>
          <div class="side-bar-wrapper active">
            <div class="side-bar-inner">
               <div class="side-bar-logo">
                  <img src="assets/images/white-logo.png">
                  <span class="close-toggleicn"><i class="fas fa-bars"></i></span>
               </div>
                <div class="sideBar-tabs">
                  <ul class="nav nav-tabs" role="tablist">
                     <li class="nav-item">
                    <router-link  class="nav-link active"  to = "/my-apps">    <span class="tab-icon"><i class="fa fa-film"></i></span>My Apps</router-link>
                     </li>
                     <li class="nav-item">
                       <router-link  class="nav-link" to = "/bank-connections"><span class="tab-icon"><i class="fa fa-university"></i></span>Bank Connection</router-link>
                     </li>
                     <li class="nav-item">
                       <router-link  class="nav-link" to = "/email-connections"><span class="tab-icon"><i class="fa fa-envelope-o"></i></span>Email Connection</router-link>
                     </li>
                      <li class="nav-item">
                       <router-link  class="nav-link" to = "/portal-connections"><span class="tab-icon"><i class="far fa-user-circle"></i></span>Portal connection</router-link>
                     </li>
                     <li class="nav-item">
                       <router-link  class="nav-link" to = "/subscription-history"><span class="tab-icon"><i class="fa fa-shopping-cart"></i></span>Subscription History</router-link>
                     </li>
                     <li class="nav-item">
                       <router-link  class="nav-link" to = "/my-profile"><span class="tab-icon"><i class="far fa-user-circle"></i></span>My profile</router-link>
                     </li>
                   </ul>
               </div>
            </div>
          </div>
      </header>
</template>
<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>