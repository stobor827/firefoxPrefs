//disable searching from urlbar
user_pref( "keyword.enabled", false);

//disable search suggestions in urlbar
user_pref("browser.urlbar.suggest.searches", false);

user_pref( "browser.search.widget.inNavBar", true);

//disable adding www, .com, etc.
user_pref( "browser.fixup.alternate.enabled", false);

//disable ff75's new oversized and excessively animated urlbar.
user_pref("browser.urlbar.update1", false);
user_pref( "browser.urlbar.openViewOnFocus", false);

//enable userChrome.css
user_pref( "toolkit.legacyUserProfileCustomizations.stylesheets", true);

user_pref("signon.rememberSignons", false);


//Other ideas:
//https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#User_Preferences
//ui.prefersReducedMotion
