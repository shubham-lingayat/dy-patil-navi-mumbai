import React from "react";

const Programs = ({data}) => {
  return (
    <section id="programs" className="programsSection">
        <div className="container center_tagline  mt-lg-3 py-4 mt-lg-0 pt-lg-0">
            {/* <!-- ######## Desktop Section ####### --> */}
            <div className="row d-none d-lg-flex">
                <div className="parentTabs d-flex justify-content-between">
                    <h2>Our <span className="textBrown"> Programs</span> </h2>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Undergraduate Program</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile"
                                aria-selected="false">Postgraduate Programs</button>
                        </li>
                    </ul>
                </div>
    
                <div className="tab-content childTabs" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    
                        {/* <!-- Tabs --> */}
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <?php foreach ($ug as $key => $tab): ?>
                                    <div className="col-lg-4">
                                        <li className="nav-item" role="presentation">
                                            <button 
                                                className="redirectBtn nav-link <?php echo $key === array_key_first($ug) ? 'active' : ''; ?>" 
                                                id="<?= $tab['id']; ?>" 
                                                data-bs-toggle="tab" 
                                                data-bs-target="#<?= $tab['targetId']; ?>" 
                                                type="button" 
                                                role="tab" 
                                                aria-controls="<?= $tab['targetId']; ?>" 
                                                aria-selected="<?php echo $key === array_key_first($ug) ? 'true' : 'false'; ?>">
                                                <div className="iconContainer">
                                                    <img src="./images/dypatil/icons/<?= $tab['imgSrc']; ?>" alt="">
                                                </div>
                                                <?= $tab['course']; ?>
                                            </button>
                                        </li>
                                    </div>
                                <?php endforeach; ?>
                            </ul>
                        <!-- Tab Content -->
                         <div id="subChildUG"></div>
                         <!--  -->
                                <div className="tab-content SubChildTabContent" id="myTabContent2">
                                    <?php foreach ($ug as $key => $tab): ?>
                                        <div 
                                            className="tab-pane fade <?php echo $key === array_key_first($ug) ? 'show active' : ''; ?>" 
                                            id="<?= $tab['targetId']; ?>" 
                                            role="tabpanel" 
                                            aria-labelledby="<?= $tab['id']; ?>">
                                            <?php foreach ($tab['tabContent'] as $content): ?>
                                                <div className="row">
                                                    <h2>
                                                        <?= $content['heading1']; ?> 
                                                        <span className="textBrown"><?= $content['heading2']; ?></span>
                                                    </h2>
    
                                                    <div className="accordion" id="accordion-<?= $tab['id']; ?>">
                                                        <!-- Overview -->
                                                        <div className="accordion-item">
                                                            <h3 className="accordion-header" id="heading-<?= $tab['id']; ?>-1">
                                                                <button 
                                                                    className="accordion-button" 
                                                                    type="button" 
                                                                    data-bs-toggle="collapse" 
                                                                    data-bs-target="#collapse-<?= $tab['id']; ?>-1" 
                                                                    aria-expanded="true" 
                                                                    aria-controls="collapse-<?= $tab['id']; ?>-1">
                                                                    <span className="brownTriangle"></span> Overview
                                                                </button>
                                                            </h3>
                                                            <div 
                                                                id="collapse-<?= $tab['id']; ?>-1" 
                                                                className="accordion-collapse collapse show" 
                                                                aria-labelledby="heading-<?= $tab['id']; ?>-1" 
                                                                data-bs-parent="#accordion-<?= $tab['id']; ?>">
                                                                <div className="accordion-body">
                                                                    <p><?= $content['overview']; ?></p>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
    
                                                        <!-- Eligibility Criteria -->
                                                        <div className="accordion-item">
                                                            <h3 className="accordion-header" id="heading-<?= $tab['id']; ?>-2">
                                                                <button 
                                                                    className="accordion-button collapsed" 
                                                                    type="button" 
                                                                    data-bs-toggle="collapse" 
                                                                    data-bs-target="#collapse-<?= $tab['id']; ?>-2" 
                                                                    aria-expanded="false" 
                                                                    aria-controls="collapse-<?= $tab['id']; ?>-2">
                                                                    <span className="brownTriangle"></span> Eligibility Criteria
                                                                </button>
                                                            </h3>
                                                            <div 
                                                                id="collapse-<?= $tab['id']; ?>-2" 
                                                                className="accordion-collapse collapse" 
                                                                aria-labelledby="heading-<?= $tab['id']; ?>-2" 
                                                                data-bs-parent="#accordion-<?= $tab['id']; ?>">
                                                                <div className="accordion-body">
                                                                    <p><?php echo $content['eligibilityCriteria']; ?></p>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
    
                                                        <!-- Specialization (if available) -->
                                                        <?php if (!empty($content['specialization'])): ?>
                                                            <div className="accordion-item">
                                                                <h3 className="accordion-header" id="heading-<?= $tab['id']; ?>-3">
                                                                    <button 
                                                                        className="accordion-button collapsed" 
                                                                        type="button" 
                                                                        data-bs-toggle="collapse" 
                                                                        data-bs-target="#collapse-<?= $tab['id']; ?>-3" 
                                                                        aria-expanded="false" 
                                                                        aria-controls="collapse-<?= $tab['id']; ?>-3">
                                                                        <span className="brownTriangle"></span> Specialization
                                                                    </button>
                                                                </h3>
                                                                <div 
                                                                    id="collapse-<?= $tab['id']; ?>-3" 
                                                                    className="accordion-collapse collapse" 
                                                                    aria-labelledby="heading-<?= $tab['id']; ?>-3" 
                                                                    data-bs-parent="#accordion-<?= $tab['id']; ?>">
                                                                    <div className="accordion-body">
                                                                        <p><?php echo $content['specialization']; ?></p>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        <?php endif; ?>
    
                                                        <!-- Duration -->
                                                        <div className="accordion-item">
                                                            <h3 className="accordion-header" id="heading-<?= $tab['id']; ?>-4">
                                                                <button 
                                                                    className="accordion-button collapsed" 
                                                                    type="button" 
                                                                    data-bs-toggle="collapse" 
                                                                    data-bs-target="#collapse-<?= $tab['id']; ?>-4" 
                                                                    aria-expanded="false" 
                                                                    aria-controls="collapse-<?= $tab['id']; ?>-4">
                                                                    <span className="brownTriangle"></span> Duration
                                                                </button>
                                                            </h3>
                                                            <div 
                                                                id="collapse-<?= $tab['id']; ?>-4" 
                                                                className="accordion-collapse collapse" 
                                                                aria-labelledby="heading-<?= $tab['id']; ?>-4" 
                                                                data-bs-parent="#accordion-<?= $tab['id']; ?>">
                                                                <div className="accordion-body">
                                                                    <p><?= $content['duration']; ?></p>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire Now</a>
                                                    </div>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
    
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        
                    
                    
                        <!-- Tabs -->
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <?php foreach ($pg as $key => $tab): ?>
                                    <div className="col-lg-4">
                                        <li className="nav-item" role="presentation">
                                            <button 
                                                className="redirectBtn2 nav-link <?php echo $key === array_key_first($pg) ? 'active' : ''; ?>" 
                                                id="<?= $tab['id']; ?>" 
                                                data-bs-toggle="tab" 
                                                data-bs-target="#<?= $tab['targetId']; ?>" 
                                                type="button" 
                                                role="tab" 
                                                aria-controls="<?= $tab['targetId']; ?>" 
                                                aria-selected="<?php echo $key === array_key_first($pg) ? 'true' : 'false'; ?>">
                                                <div className="iconContainer">
                                                    <img src="./images/dypatil/icons/<?= $tab['imgSrc']; ?>" alt="">
                                                </div>
                                                <?= $tab['course']; ?>
                                            </button>
                                        </li>
                                    </div>
                                <?php endforeach; ?>
                            </ul>
                        <!-- Tab Content -->
                         <div id="subChildPG"></div>
                         <!--  -->
                                <div className="tab-content SubChildTabContent" id="myTabContent2">
                                    <?php foreach ($pg as $key => $tab): ?>
                                        <div 
                                            className="tab-pane fade <?php echo $key === array_key_first($pg) ? 'show active' : ''; ?>" 
                                            id="<?= $tab['targetId']; ?>" 
                                            role="tabpanel" 
                                            aria-labelledby="<?= $tab['id']; ?>">
                                            <?php foreach ($tab['tabContent'] as $content): ?>
                                                <div className="row">
                                                    <h2>
                                                        <?= $content['heading1']; ?> 
                                                        <span className="textBrown"><?= $content['heading2']; ?></span>
                                                    </h2>
    
                                                    <div className="accordion" id="accordion-<?= $tab['id']; ?>">
                                                        <!-- Overview -->
                                                        <div className="accordion-item">
                                                            <h3 className="accordion-header" id="heading-<?= $tab['id']; ?>-1">
                                                                <button 
                                                                    className="accordion-button" 
                                                                    type="button" 
                                                                    data-bs-toggle="collapse" 
                                                                    data-bs-target="#collapse-<?= $tab['id']; ?>-1" 
                                                                    aria-expanded="true" 
                                                                    aria-controls="collapse-<?= $tab['id']; ?>-1">
                                                                    <span className="brownTriangle"></span> Overview
                                                                </button>
                                                            </h3>
                                                            <div 
                                                                id="collapse-<?= $tab['id']; ?>-1" 
                                                                className="accordion-collapse collapse show" 
                                                                aria-labelledby="heading-<?= $tab['id']; ?>-1" 
                                                                data-bs-parent="#accordion-<?= $tab['id']; ?>">
                                                                <div className="accordion-body">
                                                                    <p><?= $content['overview']; ?></p>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
    
                                                        <!-- Eligibility Criteria -->
                                                        <div className="accordion-item">
                                                            <h3 className="accordion-header" id="heading-<?= $tab['id']; ?>-2">
                                                                <button 
                                                                    className="accordion-button collapsed" 
                                                                    type="button" 
                                                                    data-bs-toggle="collapse" 
                                                                    data-bs-target="#collapse-<?= $tab['id']; ?>-2" 
                                                                    aria-expanded="false" 
                                                                    aria-controls="collapse-<?= $tab['id']; ?>-2">
                                                                    <span className="brownTriangle"></span> Eligibility Criteria
                                                                </button>
                                                            </h3>
                                                            <div 
                                                                id="collapse-<?= $tab['id']; ?>-2" 
                                                                className="accordion-collapse collapse" 
                                                                aria-labelledby="heading-<?= $tab['id']; ?>-2" 
                                                                data-bs-parent="#accordion-<?= $tab['id']; ?>">
                                                                <div className="accordion-body">
                                                                    <p><?php echo $content['eligibilityCriteria']; ?></p>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
    
                                                        <!-- Duration -->
                                                        <div className="accordion-item">
                                                            <h3 className="accordion-header" id="heading-<?= $tab['id']; ?>-4">
                                                                <button 
                                                                    className="accordion-button collapsed" 
                                                                    type="button" 
                                                                    data-bs-toggle="collapse" 
                                                                    data-bs-target="#collapse-<?= $tab['id']; ?>-4" 
                                                                    aria-expanded="false" 
                                                                    aria-controls="collapse-<?= $tab['id']; ?>-4">
                                                                    <span className="brownTriangle"></span> Duration
                                                                </button>
                                                            </h3>
                                                            <div 
                                                                id="collapse-<?= $tab['id']; ?>-4" 
                                                                className="accordion-collapse collapse" 
                                                                aria-labelledby="heading-<?= $tab['id']; ?>-4" 
                                                                data-bs-parent="#accordion-<?= $tab['id']; ?>">
                                                                <div className="accordion-body">
                                                                    <p><?= $content['duration']; ?></p>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="text-center">
                                                    <a href="" className="btn c_btn py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire Now</a>
                                                    </div>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                    </div>
                </div>
    
    
            </div>
            <!-- ##### Mobile Section ###### -->
             <div className="row mobilePrograms d-flex d-lg-none">
                <h2>Programs</h2>
                <!-- UG----- START -->
                <h3>Undergraduate Programs</h3>
    
                
                <div className="accordion" id="accordion-containerUGMobile">
        <?php foreach ($ug as $tabKey => $tab): 
            $isActive = ($tab['id'] === "tab1") ? "show" : "collapsed";
            $isExpanded = ($tab['id'] === "tab1") ? "true" : "false"; 
        ?>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-<?= $tab['id']; ?>">
                    <button 
                        className="accordion-button <?= ($tab['id'] === "tab1") ? '' : 'collapsed'; ?>" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapse-<?= $tab['id']; ?>" 
                        aria-expanded="<?= $isExpanded; ?>" 
                        aria-controls="collapse-<?= $tab['id']; ?>"> 
                        <?= $tab['course']; ?> 
                        <span className="brownTriangle"></span>
                    </button>
                </h2>
                <div 
                    id="collapse-<?= $tab['id']; ?>" 
                    className="accordion-collapse collapse <?= $isActive; ?>" 
                    data-bs-parent="#accordion-containerUGMobile"
                    aria-labelledby="heading-<?= $tab['id']; ?>">
                    <div className="accordion-body">
                        <?php foreach ($tab['tabContent'] as $content): ?>
                            <!-- Overview -->
                            <h3>Overview</h3>
                            <div>
                                <p><?= $content['overview']; ?></p>
                            </div>
    
                            <!-- Eligibility Criteria -->
                            <h3>Eligibility Criteria</h3>
                            <div>   
                                <p><?= $content['eligibilityCriteria']; ?></p>
                            </div>
    
                            <!-- Specialization -->
                            <?php if (!empty($content['specialization'])): ?>
                                <h3>Specialization</h3>
                                <div>
                                    <p><?= $content['specialization']; ?></p>
                                </div>
                            <?php endif; ?>
    
                            <!-- Duration -->
                            <h3>Duration</h3>
                            <div>
                                <p><?= $content['duration']; ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    
                
              <!-- UG ---- END -->
               <!-- PG ---- START -->
               <h3>Postgraduate Programs</h3>
    
               
               <div className="accordion" id="accordion-containerPGMobile">
        <?php foreach ($pg as $tabKey => $tab): ?>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-<?= $tab['id']; ?>">
                    <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapse-<?= $tab['id']; ?>" 
                        data-bs-parent="#accordion-containerPGMobile" 
                        aria-expanded="false" 
                        aria-controls="collapse-<?= $tab['id']; ?>">
                        <?= $tab['course']; ?>
                        <span className="brownTriangle"></span>
                    </button>
                </h2>
                <div 
                    id="collapse-<?= $tab['id']; ?>" 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#accordion-containerPGMobile" 
                    aria-labelledby="heading-<?= $tab['id']; ?>">
                    <div className="accordion-body">
                        <?php foreach ($tab['tabContent'] as $content): ?>
                            <!-- Overview -->
                            <h3>Overview</h3>
                            <div>
                                <p><?= $content['overview']; ?></p>
                            </div>
    
                            <!-- Eligibility Criteria -->
                            <h3>Eligibility Criteria</h3>
                            <div>   
                                <p><?= $content['eligibilityCriteria']; ?></p>
                            </div>
    
                            <!-- Specialization -->
                            <?php if (!empty($content['specialization'])): ?>
                                <h3>Specialization</h3>
                                <div>
                                    <p><?= $content['specialization']; ?></p>
                                </div>
                            <?php endif; ?>
    
                            <!-- Duration -->
                            <h3>Duration</h3>
                            <div>
                                <p><?= $content['duration']; ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    
               
                <!-- PG ---- END -->
             </div>
        </div>
    </section>
    );
};

export default Programs;
