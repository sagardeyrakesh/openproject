//-- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2015 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
//++

// 'Global' dependencies
//
// dependencies required by classic (Rails) and Angular application.

// NOTE: currently needed for PhantomJS to support Webpack's style-loader.
// See: https://github.com/webpack/style-loader/issues/31
require('phantomjs-polyfill');

require('jquery');
require('jquery-ujs');
require('jquery-ui/jquery-ui.js');
require('jquery-ui/ui/i18n/datepicker-en-GB.js');
require('jquery-ui/ui/i18n/datepicker-de.js');
require('./misc/datepicker-defaults');

require('dragula');
require('angular-dragula');

require('jquery-ui/themes/base/core.css');
require('jquery-ui/themes/base/datepicker.css');
// TODO: move require to backlogs plugin
require('jquery-ui/themes/base/dialog.css');

require('moment');
require('moment/locale/en-gb.js');
require('moment/locale/de.js');

require('moment-timezone/moment-timezone.js');
require('moment-timezone/moment-timezone-data.js');

require('jquery.atwho/dist/js/jquery.atwho.js');
require('jquery.atwho/dist/css/jquery.atwho.css');

require('Caret.js/src/jquery.caret.js');

require('select2/select2.js');
require('select2/select2.css');

require('angular');
require('angular-sanitize');

require('angular-ui-select/dist/select');
require('angular-ui-select/dist/select.css');

require('rxjs');
require('ng-dialog/js/ngDialog.min.js');
require('ng-dialog/css/ngDialog.min.css');

require('expose?URI!URIjs');
require('URIjs/src/URITemplate');
