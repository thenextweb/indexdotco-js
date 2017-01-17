import jqueryImporter from './importer/jquery';
import cssImporter from './importer/css';

export default {
	importAssets: function(settings) {
		var cssImporterPromise = cssImporter(settings);
		var jqueryImporterPromise = jqueryImporter(settings);
		return Promise.all([jqueryImporterPromise,cssImporterPromise]);
	}
}
