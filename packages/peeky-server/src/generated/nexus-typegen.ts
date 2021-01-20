/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../context"
import { TestSuiteData } from "./../schema/TestSuite"
import { RunData } from "./../schema/Run"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ClearRunInput: { // input type
    id: string; // ID!
  }
  StartRunInput: { // input type
    testFileIds?: string[] | null; // [String!]
  }
}

export interface NexusGenEnums {
  Status: "error" | "idle" | "in_progress" | "success"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Run: RunData;
  Subscription: {};
  Test: { // root type
    duration?: number | null; // Int
    error?: NexusGenRootTypes['TestError'] | null; // TestError
    id: string; // ID!
    status: NexusGenEnums['Status']; // Status!
    title: string; // String!
  }
  TestError: { // root type
    message: string; // String!
    stack?: string | null; // String
  }
  TestFile: { // root type
    deleted: boolean; // Boolean!
    duration?: number | null; // Int
    id: string; // ID!
    relativePath: string; // String!
    status: NexusGenEnums['Status']; // Status!
  }
  TestSuite: TestSuiteData;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    clearRun: NexusGenRootTypes['Run']; // Run!
    clearRuns: boolean; // Boolean!
    startRun: NexusGenRootTypes['Run']; // Run!
  }
  Query: { // field return type
    run: NexusGenRootTypes['Run'] | null; // Run
    runs: NexusGenRootTypes['Run'][]; // [Run!]!
    testFile: NexusGenRootTypes['TestFile'] | null; // TestFile
    testFiles: NexusGenRootTypes['TestFile'][]; // [TestFile!]!
  }
  Run: { // field return type
    id: string; // ID!
    progress: number; // Float!
    status: NexusGenEnums['Status']; // Status!
    testFiles: NexusGenRootTypes['TestFile'][]; // [TestFile!]!
    testSuites: NexusGenRootTypes['TestSuite'][]; // [TestSuite!]!
  }
  Subscription: { // field return type
    runAdded: NexusGenRootTypes['Run']; // Run!
    runRemoved: NexusGenRootTypes['Run']; // Run!
    runUpdated: NexusGenRootTypes['Run']; // Run!
    testAdded: NexusGenRootTypes['Test']; // Test!
    testFileAdded: NexusGenRootTypes['TestFile']; // TestFile!
    testFileRemoved: NexusGenRootTypes['TestFile']; // TestFile!
    testFileUpdated: NexusGenRootTypes['TestFile']; // TestFile!
    testSuiteAdded: NexusGenRootTypes['TestSuite']; // TestSuite!
    testSuiteUpdated: NexusGenRootTypes['TestSuite']; // TestSuite!
    testUpdated: NexusGenRootTypes['Test']; // Test!
  }
  Test: { // field return type
    duration: number | null; // Int
    error: NexusGenRootTypes['TestError'] | null; // TestError
    id: string; // ID!
    status: NexusGenEnums['Status']; // Status!
    title: string; // String!
  }
  TestError: { // field return type
    message: string; // String!
    stack: string | null; // String
  }
  TestFile: { // field return type
    deleted: boolean; // Boolean!
    duration: number | null; // Int
    id: string; // ID!
    relativePath: string; // String!
    status: NexusGenEnums['Status']; // Status!
  }
  TestSuite: { // field return type
    duration: number | null; // Int
    id: string; // ID!
    status: NexusGenEnums['Status']; // Status!
    testFile: NexusGenRootTypes['TestFile']; // TestFile!
    tests: Array<NexusGenRootTypes['Test'] | null>; // [Test]!
    title: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    clearRun: 'Run'
    clearRuns: 'Boolean'
    startRun: 'Run'
  }
  Query: { // field return type name
    run: 'Run'
    runs: 'Run'
    testFile: 'TestFile'
    testFiles: 'TestFile'
  }
  Run: { // field return type name
    id: 'ID'
    progress: 'Float'
    status: 'Status'
    testFiles: 'TestFile'
    testSuites: 'TestSuite'
  }
  Subscription: { // field return type name
    runAdded: 'Run'
    runRemoved: 'Run'
    runUpdated: 'Run'
    testAdded: 'Test'
    testFileAdded: 'TestFile'
    testFileRemoved: 'TestFile'
    testFileUpdated: 'TestFile'
    testSuiteAdded: 'TestSuite'
    testSuiteUpdated: 'TestSuite'
    testUpdated: 'Test'
  }
  Test: { // field return type name
    duration: 'Int'
    error: 'TestError'
    id: 'ID'
    status: 'Status'
    title: 'String'
  }
  TestError: { // field return type name
    message: 'String'
    stack: 'String'
  }
  TestFile: { // field return type name
    deleted: 'Boolean'
    duration: 'Int'
    id: 'ID'
    relativePath: 'String'
    status: 'Status'
  }
  TestSuite: { // field return type name
    duration: 'Int'
    id: 'ID'
    status: 'Status'
    testFile: 'TestFile'
    tests: 'Test'
    title: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    clearRun: { // args
      input: NexusGenInputs['ClearRunInput']; // ClearRunInput!
    }
    startRun: { // args
      input: NexusGenInputs['StartRunInput']; // StartRunInput!
    }
  }
  Query: {
    run: { // args
      id: string; // ID!
    }
    testFile: { // args
      id: string; // ID!
    }
  }
  Subscription: {
    testAdded: { // args
      runId: string; // String!
    }
    testSuiteAdded: { // args
      runId: string; // String!
    }
    testSuiteUpdated: { // args
      runId: string; // String!
    }
    testUpdated: { // args
      runId: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}