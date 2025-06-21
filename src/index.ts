import semver from 'semver';

export interface Comparators {
  eq?: string;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
}

export default function match(version: string, comparators: Comparators): boolean {
  if ((comparators.eq && !semver.eq(version, comparators.eq)) || (comparators.lt && !semver.lt(version, comparators.lt)) || (comparators.lte && !semver.lte(version, comparators.lte)) || (comparators.gt && !semver.gt(version, comparators.gt)) || (comparators.gte && !semver.gte(version, comparators.gte))) {
    return false;
  }
  return true;
}
