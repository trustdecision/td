(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{303:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"integrated-requirement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrated-requirement"}},[t._v("#")]),t._v(" Integrated Requirement")]),t._v(" "),e("h2",{attrs:{id:"compliance-explanation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compliance-explanation"}},[t._v("#")]),t._v(" Compliance Explanation")]),t._v(" "),e("p",[t._v("Please note that when integrating SDK products provided by the TrustDecision in the APP of your company:")]),t._v(" "),e("p",[t._v("1.1 According to the user's information protection regulations, before your users start the App for the first time and start collecting information, your company should fully inform the user of the purpose, method, and scope of collecting, using, and sharing the user's personal information with a third party through an interactive interface or design (such as a pop-up window of the privacy policy), and obtain the express consent of the end user.")]),t._v(" "),e("p",[t._v("1.2 To provide business security and risk control services to your company, the TrustDecision SDK will collect, process, and use the identification information（IMEI/IDFA）, AndroidID, IMSI, MEID, MAC address, SIM card serial number, device type, device model, system type, geographical location, login IP address, application list, running process, sensor information(light sensor, gravity sensor, magnetic field sensor, acceleration sensor, gyroscope sensor) and other device information of the user's device. To ensure compliance with your use of related services, the aforementioned privacy policy should cover the authorization of TrustDecision SDK to provide services and collect, process, and use relevant information. The following terms are for your reference. The specific expression can be determined by your company according to the overall framework and content of your privacy agreement:")]),t._v(" "),e("table",{attrs:{border:"1"}},[e("tr",[e("td",{staticStyle:{"background-color":"#FAFAFA"}},[e("font",{attrs:{size:"2"}},[t._v("TrustDecision SDK: For business security and risk control, our company uses the TrustDecision SDK. The SDK needs to obtain the information of your devices, such as （IMEI/IDFA）, AndroidID, IMSI, MAC address, SIM card serial number, device type, device model, system type, geographic location, login IP address, application list, running process, sensor information(light sensor, gravity sensor, magnetic field sensor, acceleration sensor, gyroscope sensor) and other related device information, for fraud risk identification.")])],1)])]),t._v(" "),e("p",[e("strong",[t._v("Privacy Protocol:")]),t._v(" "),e("a",{attrs:{href:"https://www.trustdecision.com/legal/privacy-policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.trustdecision.com/legal/privacy-policy"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[t._v("#")]),t._v(" Environment")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Items")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Supported System Versions")]),t._v(" "),e("td",[t._v("iOS9.0+")])]),t._v(" "),e("tr",[e("td",[t._v("Supporting architecture")]),t._v(" "),e("td",[t._v("armv7, arm64, x86_64")])])])]),t._v(" "),e("h1",{attrs:{id:"integrate-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrate-steps"}},[t._v("#")]),t._v(" Integrate Steps")]),t._v(" "),e("h2",{attrs:{id:"cocoapods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cocoapods"}},[t._v("#")]),t._v(" CocoaPods")]),t._v(" "),e("ul",[e("li",[t._v("Added "),e("code",[t._v("pod 'TrustDecisionPro', '4.2.4.2'")]),t._v(" in the corresponding target in the Podfile")]),t._v(" "),e("li",[t._v("Execute the "),e("code",[t._v("pod install --repo-update")]),t._v(" command in the folder where the Podfile is located. (M1 series mac computers need to execute "),e("code",[t._v("arch -x86_64 pod install --repo-update")]),t._v(" command)")])]),t._v(" "),e("h2",{attrs:{id:"sdk-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sdk-structure"}},[t._v("#")]),t._v(" SDK Structure")]),t._v(" "),e("p",[t._v("files in Pods/TrustDecisionPro directory:")]),t._v(" "),e("ul",[e("li",[t._v("TDMobRisk.framework（TrustDecision SDK, is a static library type）")]),t._v(" "),e("li",[t._v("TDCorePlugin.framework （TrustDecision plugin, is an Embed dynamic library type）")])]),t._v(" "),e("h2",{attrs:{id:"import-header-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-header-file"}},[t._v("#")]),t._v(" Import Header File")]),t._v(" "),e("p",[t._v("Please import the header file if you want to call SDK API.\nObjective C")]),t._v(" "),e("div",{staticClass:"language-objective extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#import <TDMobRisk/TDMobRisk.h>\n")])])]),e("p",[t._v("Swift")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TDMobRisk")]),t._v("\n")])])]),e("h2",{attrs:{id:"initialization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[t._v("#")]),t._v(" Initialization")]),t._v(" "),e("p",[e("strong",[t._v("Precautions")])]),t._v(" "),e("p",[t._v("When the installation starts for the first time, the SDK initialization is performed after the user agrees with the privacy agreement.\nAvoid SDK initialization collection without the user agreeing to the privacy agreement, causing compliance risk accidents.")]),t._v(" "),e("h3",{attrs:{id:"interface-definition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interface-definition"}},[t._v("#")]),t._v(" Interface Definition")]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("initWithOptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSDictionary "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Sample Code")]),t._v("\nObjective C")]),t._v(" "),e("div",{staticClass:"language-objective extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('- (void)initTrustDecisionSDK:(void (^)(NSString *blackbox))callback {\n  // Get riskManager\n  TDMobRiskManager_t *riskManager = [TDMobRiskManager sharedManager];\n  // Initialization Configuration\n  NSMutableDictionary *options = [NSMutableDictionary dictionary];\n\n/*************************** Mandatory Parameter ***************************/\n  //Partner code, Refer to `Required Configuration`\n  [options setValue:@"[Your partner]" forKey:@"partner"];\n  //App key, Refer to `Required Configuration`\n  [options setValue:@"[Your appKey]" forKey:@"appKey"];\n  //App name, Refer to `Required Configuration`\n  [options setValue:@"[Your appName]" forKey:@"appName"];\n  //Country code, Refer to `Required Configuration`\n  [options setValue:@"[Your country code]" forKey:@"country"];\n\n/*************************** Optional Parameter ***************************/\n#ifdef DEBUG\n  // !!! If not set this parameter in DEBUG mode, the app will terminate\n  [options setValue:@"allowed" forKey:@"allowed"];\n#endif\n  [options setValue:^(NSString *blackbox) {\n  // The callback here is in the sub-thread\n  // Under normal network conditions, the results will be returned within 200-300ms.\n  // If the network is abnormal, it will return after the timeout timeLimit (default: 15s).\n    if (callback) {\n        callback(blackbox);\n    }\n  } forKey:@"callback"];\n  riskManager->initWithOptions(options);\n}\n')])])]),e("p",[t._v("Swift")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("initTrustDecisionSDK")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@escaping")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" blackBox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" riskManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TDMobRiskManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sharedManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" options "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*************************** Mandatory Parameter ***************************/")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Partner code, Refer to `Required Configuration`")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Your partner]"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" forKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"partner"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// App key, Refer to `Required Configuration`")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Your appKey]"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" forKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appKey"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// App name, Refer to `Required Configuration`")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Your appName]"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" forKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appName"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Country code, Refer to `Required Configuration`")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Your country]"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" forKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"country"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*************************** Optional Parameter ***************************/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token directive property"}},[e("span",{pre:!0,attrs:{class:"token directive-name"}},[t._v("#if")]),t._v(" DEBUG")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// !!! If not set this parameter in DEBUG mode, the app will terminate")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allowed"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" forKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allowed"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token directive property"}},[e("span",{pre:!0,attrs:{class:"token directive-name"}},[t._v("#endif")])]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tdcallback"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("blackBox "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The callback here is in the sub-thread")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Under normal network conditions, the results will be returned within 200-300ms.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the network is abnormal, it will return after the timeout timeLimit (default: 15s).")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blackBox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"callback"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsafeBitCast")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tdcallback "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@convention")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("block"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnyObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")]),t._v("\n riskManager"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("initWithOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Required Configuration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Definition")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Scene")]),t._v(" "),e("th",[t._v("Sample code")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("partner")]),t._v(" "),e("td",[t._v("Partner code")]),t._v(" "),e("td",[t._v("Partner, please contact TrustDecision to obtain")]),t._v(" "),e("td",[t._v("All Scenes")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"[Your partner]" forKey:@"partner"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("[Your partner]" as NSObject, forKey: "partner")')])]),t._v(" "),e("tr",[e("td",[t._v("appKey")]),t._v(" "),e("td",[t._v("App key")]),t._v(" "),e("td",[t._v("Appkey, please offer your App bundleId for TrustDecision to obtain appkey creation requires the user to provide the application bundleId. ⚠️ Different values for bundleId are used for different applications")]),t._v(" "),e("td",[t._v("All Scenes")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"[Your appKey]" forKey:@"appKey"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("[Your appKey]" as NSObject, forKey: "appKey")')])]),t._v(" "),e("tr",[e("td",[t._v("appName")]),t._v(" "),e("td",[t._v("App name")]),t._v(" "),e("td",[t._v("AppName, please contact TrustDecision to obtain")]),t._v(" "),e("td",[t._v("All Scenes")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"[Your appName]" forKey:@"appName"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("[Your appName]" as NSObject, forKey: "appName")')])]),t._v(" "),e("tr",[e("td",[t._v("country")]),t._v(" "),e("td",[t._v("Country code")]),t._v(" "),e("td",[t._v("Country/region parameters, such as cn sg us fra")]),t._v(" "),e("td",[t._v("Fill in the corresponding parameters according to country and region of business. cn means China, sg means Singapore, us means North America, fra means Europe")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"[Your country code]" forKey:@"country"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("[Your country code]" as NSObject, forKey: "country")')])])])]),t._v(" "),e("h2",{attrs:{id:"get-sdk-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-sdk-version"}},[t._v("#")]),t._v(" Get SDK Version")]),t._v(" "),e("p",[e("strong",[t._v("Sample Code")])]),t._v(" "),e("p",[t._v("Objective C")]),t._v(" "),e("div",{staticClass:"language-objective extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Get SDKVersion\nTDMobRiskManager_t *riskManager = [TDMobRiskManager sharedManager];\nNSString *sdkVersion = riskManager->getSDKVersion();\n")])])]),e("p",[t._v("Swift")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get SDKVersion")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" riskManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TDMobRiskManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sharedManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sdkVersion "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" riskManager"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSDKVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h1",{attrs:{id:"fingerprint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fingerprint"}},[t._v("#")]),t._v(" Fingerprint")]),t._v(" "),e("h2",{attrs:{id:"initwithoptions-optional-parameter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initwithoptions-optional-parameter"}},[t._v("#")]),t._v(" initWithOptions Optional Parameter")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Definition")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Scene")]),t._v(" "),e("th",[t._v("Sample code")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("allowed")]),t._v(" "),e("td",[t._v("Anti-debugging configuration")]),t._v(" "),e("td",[t._v("After the SDK is integrated, the app has the anti-debugging function by default. If you don't want this feature, please set allowed to disable it.")]),t._v(" "),e("td",[e("strong",[t._v("Develop:")]),t._v(" Please set this configuration. "),e("strong",[t._v("Release:")]),t._v(" Please remove this configuration.")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"allowed" forKey:@"allowed"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("allowed" as NSObject, forKey: "allowed")')])]),t._v(" "),e("tr",[e("td",[t._v("timeLimit")]),t._v(" "),e("td",[t._v("SDK timeout interval Configuration (unit: seconds)")]),t._v(" "),e("td",[t._v("Timeout interval of network request callback after SDK initialization. Default is 15s.")]),t._v(" "),e("td",[t._v("If you have certain requirements for the callback time of the SDK, please set timeLimit.")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"5" forKey:@"timeLimit"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("5" as NSObject, forKey: "timeLimit")')])]),t._v(" "),e("tr",[e("td",[t._v("noLocation")]),t._v(" "),e("td",[t._v("SDK location information collection configuration")]),t._v(" "),e("td",[t._v("SDK collects location if the app has been authorized to get location information.")]),t._v(" "),e("td",[t._v("If you don't want SDK to collect location information, please set noLocation.")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"noLocation" forKey:@"noLocation"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("noLocation" as NSObject, forKey: "noLocation")')])]),t._v(" "),e("tr",[e("td",[t._v("noIDFA")]),t._v(" "),e("td",[t._v("SDK Advertising Identifier (IDFA) collection configuration")]),t._v(" "),e("td",[t._v("SDK collects IDFA if the app has been authorized to get IDFA information.")]),t._v(" "),e("td",[t._v("If you don't want SDK to collect IDFA information and contain IDFA-related code, please set noIDFA.")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"noIDFA" forKey:@"noIDFA"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("noIDFA" as NSObject, forKey: "noIDFA")')])]),t._v(" "),e("tr",[e("td",[t._v("noDeviceName")]),t._v(" "),e("td",[t._v("SDK deviceName collection configuration")]),t._v(" "),e("td",[t._v("SDK collects deviceName if the app has been authorized to get deviceName information.")]),t._v(" "),e("td",[t._v("If you don't want SDK to collect deviceName information, please set noDeviceName.")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"noDeviceName" forKey:@"noDeviceName"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("noDeviceName" as NSObject, forKey: "noDeviceName")')])]),t._v(" "),e("tr",[e("td",[t._v("callback")]),t._v(" "),e("td",[t._v("SDK asynchronous callback configuration")]),t._v(" "),e("td",[t._v("After the SDK uploads and collects data, it returns the blackbox according to the network request results. "),e("strong",[t._v("Success:")]),t._v(" Return non-degraded blackbox. "),e("strong",[t._v("Failed:")]),t._v(" Return degraded blackbox.")]),t._v(" "),e("td",[t._v("If you want to get a non-degraded blackbox as much as possible, please set a callback to get blackbox.")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:^(NSString *blackbox) {} forKey:@"callback"]; '),e("strong",[t._v("Swift")]),t._v(' let callback: (String)-> Void = {blackBox in } options["callback"] = unsafeBitCast(callback as @convention(block) (String) -> Void, to: AnyObject.self) as? NSObject')])]),t._v(" "),e("tr",[e("td",[t._v("collectLevel")]),t._v(" "),e("td",[t._v("Degraded blackbox length configuration")]),t._v(" "),e("td",[t._v("Degraded blackbox will be longer. This configuration allows you to control the length of the degraded blackbox")]),t._v(" "),e("td",[t._v("If you wish the degraded blackbox length is as short as possible, please set this configuration.")]),t._v(" "),e("td",[e("strong",[t._v("Objective C")]),t._v(' [options setValue:@"M" forKey:@"collectLevel"]; '),e("strong",[t._v("Swift")]),t._v(' options.updateValue("M" as NSObject, forKey: "collectLevel")')])])])]),t._v(" "),e("h2",{attrs:{id:"get-blackbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-blackbox"}},[t._v("#")]),t._v(" Get Blackbox")]),t._v(" "),e("p",[e("strong",[t._v("Attention")])]),t._v(" "),e("ul",[e("li",[t._v("Please "),e("code",[t._v("getBlackBox")]),t._v(" after "),e("code",[t._v("initWithOptions")]),t._v(", otherwise SDK exceptions will be caused.")]),t._v(" "),e("li",[t._v("We suggest that developers do not cache the results returned by "),e("code",[t._v("getBlackBox")]),t._v(" in the app. Please rely on this function to get blackbox.")])]),t._v(" "),e("p",[e("strong",[t._v("Sample Code")])]),t._v(" "),e("p",[t._v("Objective C")]),t._v(" "),e("div",{staticClass:"language-objective extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Get BlackBox\nTDMobRiskManager_t *riskManager = [TDMobRiskManager sharedManager];\nNSString *blackbox = riskManager->getBlackBox();\n")])])]),e("p",[t._v("Swift")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get BlackBox")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" riskManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TDMobRiskManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sharedManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" blackBox "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" riskManager"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBlackBox")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h1",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),e("p",[e("strong",[t._v("Q1")]),t._v("：After Integrating the TrustDecision SDK, the project cannot be debugged in Xcode. How to solve it?")]),t._v(" "),e("p",[e("strong",[t._v("A1")]),t._v("：Please refer to "),e("a",{attrs:{href:"https://doc.trustdecision.com/API?article=38822&version=182#Initialization",target:"_blank",rel:"noopener noreferrer"}},[t._v("Initialization"),e("OutboundLink")],1),t._v(" When the TrustDecision SDK is initialized, add the following parameters")]),t._v(" "),e("p",[t._v("Objective C")]),t._v(" "),e("div",{staticClass:"language-objective extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[options setValue:@"allowed" forKey:@"allowed"];\n')])])]),e("p",[t._v("Swift")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allowed"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" forKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allowed"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);