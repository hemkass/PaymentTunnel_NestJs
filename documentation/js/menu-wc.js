'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">payment-tunnel documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-e644cd2addff439f4dab964286b96e259258f9224753e48de47b232521e5c83e8d0c478a74f8898b1f42cc28f0b87d8636dbe41bbe19dbd3845aa44c0d553544"' : 'data-target="#xs-controllers-links-module-AppModule-e644cd2addff439f4dab964286b96e259258f9224753e48de47b232521e5c83e8d0c478a74f8898b1f42cc28f0b87d8636dbe41bbe19dbd3845aa44c0d553544"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-e644cd2addff439f4dab964286b96e259258f9224753e48de47b232521e5c83e8d0c478a74f8898b1f42cc28f0b87d8636dbe41bbe19dbd3845aa44c0d553544"' :
                                            'id="xs-controllers-links-module-AppModule-e644cd2addff439f4dab964286b96e259258f9224753e48de47b232521e5c83e8d0c478a74f8898b1f42cc28f0b87d8636dbe41bbe19dbd3845aa44c0d553544"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-e644cd2addff439f4dab964286b96e259258f9224753e48de47b232521e5c83e8d0c478a74f8898b1f42cc28f0b87d8636dbe41bbe19dbd3845aa44c0d553544"' : 'data-target="#xs-injectables-links-module-AppModule-e644cd2addff439f4dab964286b96e259258f9224753e48de47b232521e5c83e8d0c478a74f8898b1f42cc28f0b87d8636dbe41bbe19dbd3845aa44c0d553544"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e644cd2addff439f4dab964286b96e259258f9224753e48de47b232521e5c83e8d0c478a74f8898b1f42cc28f0b87d8636dbe41bbe19dbd3845aa44c0d553544"' :
                                        'id="xs-injectables-links-module-AppModule-e644cd2addff439f4dab964286b96e259258f9224753e48de47b232521e5c83e8d0c478a74f8898b1f42cc28f0b87d8636dbe41bbe19dbd3845aa44c0d553544"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartsModule.html" data-type="entity-link" >CartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CartsModule-407c21ab3d58e78fec1d77aaa8011d709fa81ed8adf5cc2681af7274fedd0a8bf7567e4b6bb511eecdcd7ae8e5b26c4b6087e37e00ebb4e30a678b202c7f819e"' : 'data-target="#xs-controllers-links-module-CartsModule-407c21ab3d58e78fec1d77aaa8011d709fa81ed8adf5cc2681af7274fedd0a8bf7567e4b6bb511eecdcd7ae8e5b26c4b6087e37e00ebb4e30a678b202c7f819e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartsModule-407c21ab3d58e78fec1d77aaa8011d709fa81ed8adf5cc2681af7274fedd0a8bf7567e4b6bb511eecdcd7ae8e5b26c4b6087e37e00ebb4e30a678b202c7f819e"' :
                                            'id="xs-controllers-links-module-CartsModule-407c21ab3d58e78fec1d77aaa8011d709fa81ed8adf5cc2681af7274fedd0a8bf7567e4b6bb511eecdcd7ae8e5b26c4b6087e37e00ebb4e30a678b202c7f819e"' }>
                                            <li class="link">
                                                <a href="controllers/CartsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartsModule-407c21ab3d58e78fec1d77aaa8011d709fa81ed8adf5cc2681af7274fedd0a8bf7567e4b6bb511eecdcd7ae8e5b26c4b6087e37e00ebb4e30a678b202c7f819e"' : 'data-target="#xs-injectables-links-module-CartsModule-407c21ab3d58e78fec1d77aaa8011d709fa81ed8adf5cc2681af7274fedd0a8bf7567e4b6bb511eecdcd7ae8e5b26c4b6087e37e00ebb4e30a678b202c7f819e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartsModule-407c21ab3d58e78fec1d77aaa8011d709fa81ed8adf5cc2681af7274fedd0a8bf7567e4b6bb511eecdcd7ae8e5b26c4b6087e37e00ebb4e30a678b202c7f819e"' :
                                        'id="xs-injectables-links-module-CartsModule-407c21ab3d58e78fec1d77aaa8011d709fa81ed8adf5cc2681af7274fedd0a8bf7567e4b6bb511eecdcd7ae8e5b26c4b6087e37e00ebb4e30a678b202c7f819e"' }>
                                        <li class="link">
                                            <a href="injectables/CartsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentsModule.html" data-type="entity-link" >PaymentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PaymentsModule-eb33af7ca129698790efc8d22d23ef58a004f7c7a43f067e6f85a6ea06d67f042a619f7f5916ece85de36a68cc6c3954355c3ded0d16ca09a702091f2ef272b1"' : 'data-target="#xs-controllers-links-module-PaymentsModule-eb33af7ca129698790efc8d22d23ef58a004f7c7a43f067e6f85a6ea06d67f042a619f7f5916ece85de36a68cc6c3954355c3ded0d16ca09a702091f2ef272b1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentsModule-eb33af7ca129698790efc8d22d23ef58a004f7c7a43f067e6f85a6ea06d67f042a619f7f5916ece85de36a68cc6c3954355c3ded0d16ca09a702091f2ef272b1"' :
                                            'id="xs-controllers-links-module-PaymentsModule-eb33af7ca129698790efc8d22d23ef58a004f7c7a43f067e6f85a6ea06d67f042a619f7f5916ece85de36a68cc6c3954355c3ded0d16ca09a702091f2ef272b1"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PaymentsModule-eb33af7ca129698790efc8d22d23ef58a004f7c7a43f067e6f85a6ea06d67f042a619f7f5916ece85de36a68cc6c3954355c3ded0d16ca09a702091f2ef272b1"' : 'data-target="#xs-injectables-links-module-PaymentsModule-eb33af7ca129698790efc8d22d23ef58a004f7c7a43f067e6f85a6ea06d67f042a619f7f5916ece85de36a68cc6c3954355c3ded0d16ca09a702091f2ef272b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentsModule-eb33af7ca129698790efc8d22d23ef58a004f7c7a43f067e6f85a6ea06d67f042a619f7f5916ece85de36a68cc6c3954355c3ded0d16ca09a702091f2ef272b1"' :
                                        'id="xs-injectables-links-module-PaymentsModule-eb33af7ca129698790efc8d22d23ef58a004f7c7a43f067e6f85a6ea06d67f042a619f7f5916ece85de36a68cc6c3954355c3ded0d16ca09a702091f2ef272b1"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-771f86071845a0156d6fd7363bf5bb90c0aef86f99b1548006545958b28f80d7ad81e61429697fc1e03c9f70f342849444c771d7f2295b662098280970139c39"' : 'data-target="#xs-injectables-links-module-PrismaModule-771f86071845a0156d6fd7363bf5bb90c0aef86f99b1548006545958b28f80d7ad81e61429697fc1e03c9f70f342849444c771d7f2295b662098280970139c39"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-771f86071845a0156d6fd7363bf5bb90c0aef86f99b1548006545958b28f80d7ad81e61429697fc1e03c9f70f342849444c771d7f2295b662098280970139c39"' :
                                        'id="xs-injectables-links-module-PrismaModule-771f86071845a0156d6fd7363bf5bb90c0aef86f99b1548006545958b28f80d7ad81e61429697fc1e03c9f70f342849444c771d7f2295b662098280970139c39"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-12d84e3673efed44dfdf665ae49ae4bd5a0a001c69397540da0656b5f096f3efc7d838f210f5970702c22ff05c0159c9979cbb2baf396c0c5f5c83310524736d"' : 'data-target="#xs-controllers-links-module-ProductsModule-12d84e3673efed44dfdf665ae49ae4bd5a0a001c69397540da0656b5f096f3efc7d838f210f5970702c22ff05c0159c9979cbb2baf396c0c5f5c83310524736d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-12d84e3673efed44dfdf665ae49ae4bd5a0a001c69397540da0656b5f096f3efc7d838f210f5970702c22ff05c0159c9979cbb2baf396c0c5f5c83310524736d"' :
                                            'id="xs-controllers-links-module-ProductsModule-12d84e3673efed44dfdf665ae49ae4bd5a0a001c69397540da0656b5f096f3efc7d838f210f5970702c22ff05c0159c9979cbb2baf396c0c5f5c83310524736d"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-12d84e3673efed44dfdf665ae49ae4bd5a0a001c69397540da0656b5f096f3efc7d838f210f5970702c22ff05c0159c9979cbb2baf396c0c5f5c83310524736d"' : 'data-target="#xs-injectables-links-module-ProductsModule-12d84e3673efed44dfdf665ae49ae4bd5a0a001c69397540da0656b5f096f3efc7d838f210f5970702c22ff05c0159c9979cbb2baf396c0c5f5c83310524736d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-12d84e3673efed44dfdf665ae49ae4bd5a0a001c69397540da0656b5f096f3efc7d838f210f5970702c22ff05c0159c9979cbb2baf396c0c5f5c83310524736d"' :
                                        'id="xs-injectables-links-module-ProductsModule-12d84e3673efed44dfdf665ae49ae4bd5a0a001c69397540da0656b5f096f3efc7d838f210f5970702c22ff05c0159c9979cbb2baf396c0c5f5c83310524736d"' }>
                                        <li class="link">
                                            <a href="injectables/CartsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-09fbb963ea19322ac395e597ceac4822c548fcd8f780a63af945f686a94548f97c107a12dc0ec91bfbd5c59045362e65caab3a332fdd842b3a0451926c1e1862"' : 'data-target="#xs-controllers-links-module-UsersModule-09fbb963ea19322ac395e597ceac4822c548fcd8f780a63af945f686a94548f97c107a12dc0ec91bfbd5c59045362e65caab3a332fdd842b3a0451926c1e1862"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-09fbb963ea19322ac395e597ceac4822c548fcd8f780a63af945f686a94548f97c107a12dc0ec91bfbd5c59045362e65caab3a332fdd842b3a0451926c1e1862"' :
                                            'id="xs-controllers-links-module-UsersModule-09fbb963ea19322ac395e597ceac4822c548fcd8f780a63af945f686a94548f97c107a12dc0ec91bfbd5c59045362e65caab3a332fdd842b3a0451926c1e1862"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-09fbb963ea19322ac395e597ceac4822c548fcd8f780a63af945f686a94548f97c107a12dc0ec91bfbd5c59045362e65caab3a332fdd842b3a0451926c1e1862"' : 'data-target="#xs-injectables-links-module-UsersModule-09fbb963ea19322ac395e597ceac4822c548fcd8f780a63af945f686a94548f97c107a12dc0ec91bfbd5c59045362e65caab3a332fdd842b3a0451926c1e1862"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-09fbb963ea19322ac395e597ceac4822c548fcd8f780a63af945f686a94548f97c107a12dc0ec91bfbd5c59045362e65caab3a332fdd842b3a0451926c1e1862"' :
                                        'id="xs-injectables-links-module-UsersModule-09fbb963ea19322ac395e597ceac4822c548fcd8f780a63af945f686a94548f97c107a12dc0ec91bfbd5c59045362e65caab3a332fdd842b3a0451926c1e1862"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CartsController.html" data-type="entity-link" >CartsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PaymentsController.html" data-type="entity-link" >PaymentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddOwnerDto.html" data-type="entity-link" >AddOwnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/addProductBodyDTO.html" data-type="entity-link" >addProductBodyDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/addProductDTO.html" data-type="entity-link" >addProductDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/removeProductDTO.html" data-type="entity-link" >removeProductDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartsService.html" data-type="entity-link" >CartsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CheckingProductOnCartMiddleware.html" data-type="entity-link" >CheckingProductOnCartMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExistingCartMiddleware.html" data-type="entity-link" >ExistingCartMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExistingProductMiddleware.html" data-type="entity-link" >ExistingProductMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentsService.html" data-type="entity-link" >PaymentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Adress.html" data-type="entity-link" >Adress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Request.html" data-type="entity-link" >Request</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Request-1.html" data-type="entity-link" >Request</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Request-2.html" data-type="entity-link" >Request</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});