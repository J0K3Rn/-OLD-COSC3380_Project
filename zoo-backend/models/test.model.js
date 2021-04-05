module.exports = (sequelize, Sequelize) => {
	var Test = sequelize.define("test", {
		title: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		published: {
			type: Sequelize.BOOLEAN
		}
	});

	return Test;
};
