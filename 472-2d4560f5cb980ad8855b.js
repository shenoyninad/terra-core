(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{1568:function(e,t,r){e.exports={marked:"marked-module__marked___2rRhM"}},2327:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(5),d=r.n(s),g=r(1568),c=r.n(g),p=d.a.bind(c.a);t.default=function(){return n.a.createElement("div",{dir:"ltr",className:p("marked"),dangerouslySetInnerHTML:{__html:'\x3c!-- Logo --\x3e\n<p align="center">\n  <img alt="Terra Logo" height="128" width="128" src="https://github.com/cerner/terra-core/raw/master/terra.png" />\n</p>\n\n\x3c!-- Name --\x3e\n<h1 align="center">\n  Terra Core\n</h1>\n\n<a href="http://engineering.cerner.com/2014/01/cerner-and-open-source/"><img src="https://badgen.net/badge/Cerner/OSS/blue" alt="Cerner OSS"></a>\n<a href="https://github.com/cerner/terra-core/blob/master/LICENSE"><img src="https://badgen.net/badge/license/Apache-2.0/blue" alt="License"></a>\n<a href="https://travis-ci.com/cerner/terra-core"><img src="https://badgen.net/travis/cerner/terra-core" alt="Build Status"></a>\n<a href="https://david-dm.org/cerner/terra-core?type=dev"><img src="https://badgen.net/david/dev/cerner/terra-core" alt="devDependencies status"></a>\n<a href="https://lerna.js.org/"><img src="https://badgen.net/badge/maintained%20with/lerna/cc00ff" alt="lerna"></a><ul>\n<li><a href="#packages">Packages</a><ul>\n<li><a href="#versioning">Versioning</a></li>\n<li><a href="#status">Status</a></li>\n<li><a href="#deprecated">Deprecated</a></li>\n</ul>\n</li>\n<li><a href="#supported-browsers">Supported Browsers</a></li>\n<li><a href="#internationalization-i18n">Internationalization (I18n)</a><ul>\n<li><a href="#packages-requiring-i18n">Packages Requiring I18n</a></li>\n</ul>\n</li>\n<li><a href="#contributing">Contributing</a></li>\n<li><a href="#local-development">Local Development</a></li>\n<li><a href="#license">LICENSE</a></li>\n</ul>\n<h2 id="packages">\n  Packages\n</h2>\n\n<h3 id="versioning">\n  Versioning\n</h3>\n\nWhen a component reaches v1.0.0., it is considered to be stable and will follow <a href="http://semver.org/">SemVer</a> for versioning.<ol>\n<li>MAJOR versions represent breaking changes</li>\n<li>MINOR versions represent added functionality in a backwards-compatible manner</li>\n<li>PATCH versions represent backwards-compatible bug fixes</li>\n</ol>\nConsult the component CHANGELOGs, related issues, and PRs for more information.We view the React.js props API of our components as our main public API. We use this to guide us when versioning components.Prior to components reaching v1.0.0, a component is considered to be in a beta stage.\nComponents in beta stage may include breaking changes, new features, and bug fixes all within v0.x.x releases.<h3 id="status">\n  Status\n</h3>\n\n<img src="https://badgen.net/badge/status/Stable/green" alt="Stable">\n<img src="https://badgen.net/badge/status/Beta/orange" alt="Beta">\n<img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated">\x3c!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGELIST) --\x3e\n<table>\n<thead>\n<tr>\n<th>Terra Package</th>\n<th>Version</th>\n<th>Status</th>\n<th>Dependencies</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer">terra-action-footer</a></td>\n<td><a href="https://www.npmjs.org/package/terra-action-footer"><img src="https://badgen.net/npm/v/terra-action-footer" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-action-footer"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-action-footer" alt="terra-action-footer"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-action-header">terra-action-header</a></td>\n<td><a href="https://www.npmjs.org/package/terra-action-header"><img src="https://badgen.net/npm/v/terra-action-header" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-action-header"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-action-header" alt="terra-action-header"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-alert">terra-alert</a></td>\n<td><a href="https://www.npmjs.org/package/terra-alert"><img src="https://badgen.net/npm/v/terra-alert" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-alert"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-alert" alt="terra-alert"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-arrange">terra-arrange</a></td>\n<td><a href="https://www.npmjs.org/package/terra-arrange"><img src="https://badgen.net/npm/v/terra-arrange" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-arrange"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-arrange" alt="terra-arrange"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-avatar">terra-avatar</a></td>\n<td><a href="https://www.npmjs.org/package/terra-avatar"><img src="https://badgen.net/npm/v/terra-avatar" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-avatar"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-avatar" alt="terra-avatar"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-badge">terra-badge</a></td>\n<td><a href="https://www.npmjs.org/package/terra-badge"><img src="https://badgen.net/npm/v/terra-badge" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-badge"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-badge" alt="terra-badge"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-base">terra-base</a></td>\n<td><a href="https://www.npmjs.org/package/terra-base"><img src="https://badgen.net/npm/v/terra-base" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-base"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-base" alt="terra-base"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-breakpoints">terra-breakpoints</a></td>\n<td><a href="https://www.npmjs.org/package/terra-breakpoints"><img src="https://badgen.net/npm/v/terra-breakpoints" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-breakpoints"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-breakpoints" alt="terra-breakpoints"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-button">terra-button</a></td>\n<td><a href="https://www.npmjs.org/package/terra-button"><img src="https://badgen.net/npm/v/terra-button" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-button"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-button" alt="terra-button"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-button-group">terra-button-group</a></td>\n<td><a href="https://www.npmjs.org/package/terra-button-group"><img src="https://badgen.net/npm/v/terra-button-group" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-button-group"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-button-group" alt="terra-button-group"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-card">terra-card</a></td>\n<td><a href="https://www.npmjs.org/package/terra-card"><img src="https://badgen.net/npm/v/terra-card" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-card"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-card" alt="terra-card"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-content-container">terra-content-container</a></td>\n<td><a href="https://www.npmjs.org/package/terra-content-container"><img src="https://badgen.net/npm/v/terra-content-container" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-content-container"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-content-container" alt="terra-content-container"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner">terra-demographics-banner</a></td>\n<td><a href="https://www.npmjs.org/package/terra-demographics-banner"><img src="https://badgen.net/npm/v/terra-demographics-banner" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-demographics-banner"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-demographics-banner" alt="terra-demographics-banner"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-dialog">terra-dialog</a></td>\n<td><a href="https://www.npmjs.org/package/terra-dialog"><img src="https://badgen.net/npm/v/terra-dialog" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-dialog"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-dialog" alt="terra-dialog"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-divider">terra-divider</a></td>\n<td><a href="https://www.npmjs.org/package/terra-divider"><img src="https://badgen.net/npm/v/terra-divider" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-divider"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-divider" alt="terra-divider"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template">terra-doc-template</a></td>\n<td><a href="https://www.npmjs.org/package/terra-doc-template"><img src="https://badgen.net/npm/v/terra-doc-template" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-doc-template"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-doc-template" alt="terra-doc-template"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-dropdown-button">terra-dropdown-button</a></td>\n<td><a href="https://www.npmjs.org/package/terra-dropdown-button"><img src="https://badgen.net/npm/v/terra-dropdown-button" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-dropdown-button"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-dropdown-button" alt="terra-dropdown-button"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-dynamic-grid">terra-dynamic-grid</a></td>\n<td><a href="https://www.npmjs.org/package/terra-dynamic-grid"><img src="https://badgen.net/npm/v/terra-dynamic-grid" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-dynamic-grid"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-dynamic-grid" alt="terra-dynamic-grid"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-checkbox">terra-form-checkbox</a></td>\n<td><a href="https://www.npmjs.org/package/terra-form-checkbox"><img src="https://badgen.net/npm/v/terra-form-checkbox" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-form-checkbox"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-checkbox" alt="terra-form-checkbox"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-field">terra-form-field</a></td>\n<td><a href="https://www.npmjs.org/package/terra-form-field"><img src="https://badgen.net/npm/v/terra-form-field" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-form-field"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-field" alt="terra-form-field"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-fieldset">terra-form-fieldset</a></td>\n<td><a href="https://www.npmjs.org/package/terra-form-fieldset"><img src="https://badgen.net/npm/v/terra-form-fieldset" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-form-fieldset"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-fieldset" alt="terra-form-fieldset"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-input">terra-form-input</a></td>\n<td><a href="https://www.npmjs.org/package/terra-form-input"><img src="https://badgen.net/npm/v/terra-form-input" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-form-input"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-input" alt="terra-form-input"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-radio">terra-form-radio</a></td>\n<td><a href="https://www.npmjs.org/package/terra-form-radio"><img src="https://badgen.net/npm/v/terra-form-radio" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-form-radio"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-radio" alt="terra-form-radio"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select">terra-form-select</a></td>\n<td><a href="https://www.npmjs.org/package/terra-form-select"><img src="https://badgen.net/npm/v/terra-form-select" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-form-select"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-select" alt="terra-form-select"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-textarea">terra-form-textarea</a></td>\n<td><a href="https://www.npmjs.org/package/terra-form-textarea"><img src="https://badgen.net/npm/v/terra-form-textarea" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-form-textarea"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-textarea" alt="terra-form-textarea"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-grid">terra-grid</a></td>\n<td><a href="https://www.npmjs.org/package/terra-grid"><img src="https://badgen.net/npm/v/terra-grid" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-grid"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-grid" alt="terra-grid"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-heading">terra-heading</a></td>\n<td><a href="https://www.npmjs.org/package/terra-heading"><img src="https://badgen.net/npm/v/terra-heading" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-heading"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-heading" alt="terra-heading"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-hyperlink">terra-hyperlink</a></td>\n<td><a href="https://www.npmjs.org/package/terra-hyperlink"><img src="https://badgen.net/npm/v/terra-hyperlink" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-hyperlink"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-hyperlink" alt="terra-hyperlink"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-i18n">terra-i18n</a></td>\n<td><a href="https://www.npmjs.org/package/terra-i18n"><img src="https://badgen.net/npm/v/terra-i18n" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-i18n"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-i18n" alt="terra-i18n"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-icon">terra-icon</a></td>\n<td><a href="https://www.npmjs.org/package/terra-icon"><img src="https://badgen.net/npm/v/terra-icon" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-icon"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-icon" alt="terra-icon"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-image">terra-image</a></td>\n<td><a href="https://www.npmjs.org/package/terra-image"><img src="https://badgen.net/npm/v/terra-image" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-image"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-image" alt="terra-image"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-legacy-theme">terra-legacy-theme</a></td>\n<td><a href="https://www.npmjs.org/package/terra-legacy-theme"><img src="https://badgen.net/npm/v/terra-legacy-theme" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-legacy-theme"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-legacy-theme" alt="terra-legacy-theme"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-list">terra-list</a></td>\n<td><a href="https://www.npmjs.org/package/terra-list"><img src="https://badgen.net/npm/v/terra-list" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-list"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-list" alt="terra-list"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-markdown">terra-markdown</a></td>\n<td><a href="https://www.npmjs.org/package/terra-markdown"><img src="https://badgen.net/npm/v/terra-markdown" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-markdown"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-markdown" alt="terra-markdown"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-mixins">terra-mixins</a></td>\n<td><a href="https://www.npmjs.org/package/terra-mixins"><img src="https://badgen.net/npm/v/terra-mixins" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-mixins"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-mixins" alt="terra-mixins"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-overlay">terra-overlay</a></td>\n<td><a href="https://www.npmjs.org/package/terra-overlay"><img src="https://badgen.net/npm/v/terra-overlay" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-overlay"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-overlay" alt="terra-overlay"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-paginator">terra-paginator</a></td>\n<td><a href="https://www.npmjs.org/package/terra-paginator"><img src="https://badgen.net/npm/v/terra-paginator" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-paginator"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-paginator" alt="terra-paginator"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-profile-image">terra-profile-image</a></td>\n<td><a href="https://www.npmjs.org/package/terra-profile-image"><img src="https://badgen.net/npm/v/terra-profile-image" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-profile-image"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-profile-image" alt="terra-profile-image"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-progress-bar">terra-progress-bar</a></td>\n<td><a href="https://www.npmjs.org/package/terra-progress-bar"><img src="https://badgen.net/npm/v/terra-progress-bar" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-progress-bar"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-progress-bar" alt="terra-progress-bar"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-props-table">terra-props-table</a></td>\n<td><a href="https://www.npmjs.org/package/terra-props-table"><img src="https://badgen.net/npm/v/terra-props-table" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-props-table"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-props-table" alt="terra-props-table"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element">terra-responsive-element</a></td>\n<td><a href="https://www.npmjs.org/package/terra-responsive-element"><img src="https://badgen.net/npm/v/terra-responsive-element" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-responsive-element"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-responsive-element" alt="terra-responsive-element"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-scroll">terra-scroll</a></td>\n<td><a href="https://www.npmjs.org/package/terra-scroll"><img src="https://badgen.net/npm/v/terra-scroll" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-scroll"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-scroll" alt="terra-scroll"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-search-field">terra-search-field</a></td>\n<td><a href="https://www.npmjs.org/package/terra-search-field"><img src="https://badgen.net/npm/v/terra-search-field" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-search-field"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-search-field" alt="terra-search-field"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-section-header">terra-section-header</a></td>\n<td><a href="https://www.npmjs.org/package/terra-section-header"><img src="https://badgen.net/npm/v/terra-section-header" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-section-header"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-section-header" alt="terra-section-header"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-show-hide">terra-show-hide</a></td>\n<td><a href="https://www.npmjs.org/package/terra-show-hide"><img src="https://badgen.net/npm/v/terra-show-hide" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-show-hide"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-show-hide" alt="terra-show-hide"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-signature">terra-signature</a></td>\n<td><a href="https://www.npmjs.org/package/terra-signature"><img src="https://badgen.net/npm/v/terra-signature" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-signature"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-signature" alt="terra-signature"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-spacer">terra-spacer</a></td>\n<td><a href="https://www.npmjs.org/package/terra-spacer"><img src="https://badgen.net/npm/v/terra-spacer" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-spacer"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-spacer" alt="terra-spacer"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-status">terra-status</a></td>\n<td><a href="https://www.npmjs.org/package/terra-status"><img src="https://badgen.net/npm/v/terra-status" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-status"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-status" alt="terra-status"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-status-view">terra-status-view</a></td>\n<td><a href="https://www.npmjs.org/package/terra-status-view"><img src="https://badgen.net/npm/v/terra-status-view" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-status-view"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-status-view" alt="terra-status-view"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-table">terra-table</a></td>\n<td><a href="https://www.npmjs.org/package/terra-table"><img src="https://badgen.net/npm/v/terra-table" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-table"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-table" alt="terra-table"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-tag">terra-tag</a></td>\n<td><a href="https://www.npmjs.org/package/terra-tag"><img src="https://badgen.net/npm/v/terra-tag" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-tag"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-tag" alt="terra-tag"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-text">terra-text</a></td>\n<td><a href="https://www.npmjs.org/package/terra-text"><img src="https://badgen.net/npm/v/terra-text" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-text"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-text" alt="terra-text"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-toggle">terra-toggle</a></td>\n<td><a href="https://www.npmjs.org/package/terra-toggle"><img src="https://badgen.net/npm/v/terra-toggle" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-toggle"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-toggle" alt="terra-toggle"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-toggle-button">terra-toggle-button</a></td>\n<td><a href="https://www.npmjs.org/package/terra-toggle-button"><img src="https://badgen.net/npm/v/terra-toggle-button" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-toggle-button"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-toggle-button" alt="terra-toggle-button"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-toggle-section-header">terra-toggle-section-header</a></td>\n<td><a href="https://www.npmjs.org/package/terra-toggle-section-header"><img src="https://badgen.net/npm/v/terra-toggle-section-header" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-toggle-section-header"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-toggle-section-header" alt="terra-toggle-section-header"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-visually-hidden-text">terra-visually-hidden-text</a></td>\n<td><a href="https://www.npmjs.org/package/terra-visually-hidden-text"><img src="https://badgen.net/npm/v/terra-visually-hidden-text" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-core?path=packages/terra-visually-hidden-text"><img src="https://badgen.net/david/dep/cerner/terra-core/packages/terra-visually-hidden-text" alt="terra-visually-hidden-text"></a></td>\n</tr>\n<tr>\n<td>\x3c!-- AUTO-GENERATED-CONTENT:END *--\x3e</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody></table>\n<h3 id="deprecated">\n  Deprecated\n</h3>\n\n<table>\n<thead>\n<tr>\n<th>Terra Package</th>\n<th>Version</th>\n<th>Status</th>\n<th>Dependencies</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>terra-form</td>\n<td><a href="https://www.npmjs.org/package/terra-form"><img src="https://badgen.net/npm/v/terra-form" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n<td><img src="https://badgen.net/badge/dependencies/n%2Fa/grey" alt="terra-form"></td>\n</tr>\n<tr>\n<td>terra-i18n-plugin</td>\n<td><a href="https://www.npmjs.org/package/terra-i18n-plugin"><img src="https://badgen.net/npm/v/terra-i18n-plugin" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n<td><img src="https://badgen.net/badge/dependencies/n%2Fa/grey" alt="terra-i18n-plugin"></td>\n</tr>\n<tr>\n<td>terra-modal</td>\n<td><a href="https://www.npmjs.org/package/terra-modal"><img src="https://badgen.net/npm/v/terra-modal" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n<td><img src="https://badgen.net/badge/dependencies/n%2Fa/grey" alt="terra-application"></td>\n</tr>\n</tbody></table>\n<h2 id="supported-browsers">\n  Supported Browsers\n</h2>\n\n<table>\n<thead>\n<tr>\n<th>Browser</th>\n<th>Version</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Chrome &amp; Chrome for Android</td>\n<td>Current</td>\n</tr>\n<tr>\n<td>Edge</td>\n<td>Current</td>\n</tr>\n<tr>\n<td>Firefox</td>\n<td>Current</td>\n</tr>\n<tr>\n<td>Internet Explorer</td>\n<td>10 &amp; 11</td>\n</tr>\n<tr>\n<td>Safari &amp; Mobile Safari</td>\n<td>Current</td>\n</tr>\n</tbody></table>\n<h2 id="internationalization-i18n">\n  Internationalization (I18n)\n</h2>\n\nPlease review <a href="https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/internationalization-intro">Terra&#39;s Internationalization documentation</a> for more information. Included are directions on consumption and how internationalization is setup.<h3 id="packages-requiring-i18n">\n  Packages Requiring I18n\n</h3>\n\n<ul>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-action-header">terra-action-header</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-alert">terra-alert</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner">terra-demographics-banner</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-dialog">terra-dialog</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-checkbox">terra-form-checkbox</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-field">terra-form-field</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-radio">terra-form-radio</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select">terra-form-select</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-i18n">terra-i18n</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-overlay">terra-overlay</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-search-field">terra-search-field</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-show-hide">terra-show-hide</a></li>\n<li><a href="https://github.com/cerner/terra-core/tree/master/packages/terra-status-view">terra-status-view</a></li>\n</ul>\n<h2 id="contributing">\n  Contributing\n</h2>\n\nPlease read through our <a href="/terra-core/CONTRIBUTING.md">contributing guidelines</a>. Included are directions for issue reporting and pull requests.<h2 id="local-development">\n  Local Development\n</h2>\n\n<ol>\n<li>Install <a href="https://github.com/creationix/nvm#install-script">Node Version Manager (NVM) and Node</a>. The root directory contains a <a href="https://github.com/cerner/terra-core/blob/master/.nvmrc"><code>.nvmrc</code></a> file that specifies terra-core&#39;s node version. Once NVM is installed and you are within the root directory, your version of node will change to this version.</li>\n<li>Install docker <a href="https://www.docker.com/">https://www.docker.com/</a> to run browser tests.</li>\n<li>Install dependencies and run tests.<pre><code class="codeblock language-sh">npm install\nnpm run test</code></pre>\n</li>\n</ol>\n<h2 id="license">\n  LICENSE\n</h2>\n\nCopyright 2017 - 2019 Cerner Innovation, Inc.Licensed under the Apache License, Version 2.0 (the &quot;License&quot;); you may not use this file except in compliance with the License. You may obtain a copy of the License at&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'}})}}}]);
//# sourceMappingURL=472-2d4560f5cb980ad8855b.js.map