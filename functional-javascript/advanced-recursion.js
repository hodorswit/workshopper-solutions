function getDependencies(tree, result) {
  result = result || [];
  let dependencies = (tree && tree.dependencies) || [];

  Object.keys(dependencies).forEach(dep => {
    let name = `${dep}@${dependencies[dep].version}`;
    if (!result.includes(name)) result.push(name);
    getDependencies(dependencies[dep], result);
  });

  return result.sort();
}

module.exports = getDependencies;
