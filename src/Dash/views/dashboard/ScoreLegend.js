import React from 'react';

function ScoreLegend(props) {
    return (
        <div>
            <div className=" w-full  bg-gradient-to-r from-white via-white to-gray-100">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <div className="">
                      <h4 className="text-lg font-extrabold mr-10 pb-4 tracking-tight text-center text-gray-900 sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl">CYBER-SECURITY CAPABILITY MATURITY SCORECARD</h4>
    <p className=" mx-8 text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">The scorecard describes a four-level evolutionary path of increasingly organized and systematically more mature processes. The model defines four maturity indicator levels (MILs), MIL0 through MIL3, which apply independently to each domain in the model. You can assess your organization’s maturity score and consider your priories. The MILs define a dual progression of maturity: an approach progression and a management progression, which are explained in the following sections.</p>
<div className="w-full h-auto overflow-hidden ">
                <img src="\images\legend.png" alt="legend gif" />
              </div>
{/*    <p className=" mx-8 text-base text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">Infohorus Ransomware Risk Management platform is everything you need to be able to:</p>
     <ul className="list-disc mx-12 text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">
     <li>Manage your enterprise-level and business process-level risks that expose your organization to ransomware attacks</li>
     <li>Create a coordinated and collaborative cybersecurity program that includes every level of the organization.
     </li>
     <li>Benchmark your readiness in responding and dealing with a ransomware attack</li>
     <li>Track the implementation of actions required to address existing gaps in your program at a strategic and operational level</li>
     <li>Assign implementation actions to specific owners in different parts of your organization</li>
     <li >Present operational and executive reports</li>
     <p>… and a lot more all in one place</p>
    </ul>
    <p className=" mx-8 text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">See for yourself by filling out the form to schedule a free demo customized to your specific organization.</p> */}
                  
                </div>
              </div>
            </div>
        </div>
    );
}

export default ScoreLegend;