const catagoryGeneral = {
  guid: 'overwatch.achievementCategory.0',
  name: 'General',
  slug: 'general'
}

const catagoryOffense = {
  guid: 'overwatch.achievementCategory.1',
  name: 'Offense',
  slug: 'offense'
}

const catagoryDefense = {
  guid: 'overwatch.achievementCategory.2',
  name: 'Defense',
  slug: 'defense'
}

const catagoryTank = {
  guid: 'overwatch.achievementCategory.3',
  name: 'Tank',
  slug: 'tank'
}

const catagorySupport = {
  guid: 'overwatch.achievementCategory.4',
  name: 'Support',
  slug: 'support'
}

const catagoryMaps = {
  guid: 'overwatch.achievementCategory.5',
  name: 'Maps',
  slug: 'maps'
}

const catagorySpecial = {
  guid: 'overwatch.achievementCategory.6',
  name: 'Special',
  slug: 'special'
}

module.exports.catagory = {
  general: catagoryGeneral,
  offense: catagoryOffense,
  defense: catagoryDefense,
  tank: catagoryTank,
  support: catagorySupport,
  maps: catagoryMaps,
  special: catagorySpecial
}

module.exports.catagory.fromGuid = {
  'overwatch.achievementCategory.0': catagoryGeneral,
  'overwatch.achievementCategory.1': catagoryOffense,
  'overwatch.achievementCategory.2': catagoryDefense,
  'overwatch.achievementCategory.3': catagoryTank,
  'overwatch.achievementCategory.4': catagorySupport,
  'overwatch.achievementCategory.5': catagoryMaps,
  'overwatch.achievementCategory.6': catagorySpecial
}
