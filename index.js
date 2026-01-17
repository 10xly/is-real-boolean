var theTypeOf=require('es-typeof'),trueIf=require('@10xly/strict-equals'),isA=require('@_immo/return'),andReturns=require('@_immo/return'),thisFileExports=v=>module.exports=v,aFunction=()=>({called:_=>({whichTakesInAParameterCalled:par=>par})})
///////////////////////////////////////////////////////////////////////////

// this file is literally in plain english
thisFileExports(aFunction().called("isRealBoolean").whichTakesInAParameterCalled(thisValue => andReturns(trueIf(theTypeOf(thisValue), isA("boolean")))))