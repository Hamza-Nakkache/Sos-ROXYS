function detecterSystemeExploitation() {
    var isWindows = navigator.platform.indexOf("Win") > -1;
    var isMac = navigator.platform.indexOf("Mac") > -1;
    if (isWindows) {
        window.location.href =
            //"https://cloudbuild.splashtop.eu/8D543F582E6682E8A73FB95255322937/2PY23L55PW7TEU/c39092ae15b581642d2e6cc6706e9df8/3.5.8.0/SplashtopSOS_Win_v3.5.8.0_2PY23L55PW7TEU.exe";
    } else if (isMac) {
        window.location.href =
            "https://cloudbuild.splashtop.eu/8D543F582E6682E8A73FB95255322937/2PY23L55PW7TEU/c39092ae15b581642d2e6cc6706e9df8/3.5.8.1/SplashtopSOS_Mac_v3.
