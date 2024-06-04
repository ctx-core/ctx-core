# ctx-core

The ctx-core library is a 0 dependency library with several exports to support general app development. This library has several exports to limit what is loaded into memory & to make tree-shaking less intensive. Some of the underlying functions are in multiple exports. The full list of exports is below. There is varying comprehensiveness & usage for these functions.

## Development Monorepo

The [development monorepo](https://github.com/ctx-core/dev) used to have the ctx-core/ctx-core project name but has been moved to make room for this package.

### ctx-core/all

A catch all export which includes all functions. ctx-core/all is used to verify that the source functions have unique names.

### ctx-core/array

### ctx-core/atob

### ctx-core/base16

### ctx-core/be

[ctx-core/be](https://github.com/ctx-core/be) is a general purpose, modular, & scalable context library. See it's Readme for more docs.

### ctx-core/btoa

### ctx-core/buffer

### ctx-core/chain

### ctx-core/class

### ctx-core/cli-args

### ctx-core/color

### ctx-core/combinators

### ctx-core/crypto

### ctx-core/currency

### ctx-core/data

### ctx-core/date

### ctx-core/debounce

### ctx-core/deep_equal

### ctx-core/dom

### ctx-core/env

### ctx-core/error

### ctx-core/event_log

### ctx-core/falsy

### ctx-core/fetch

### ctx-core/fibonacci

### ctx-core/fs

### ctx-core/function

### ctx-core/functional

### ctx-core/html

### ctx-core/http

### ctx-core/math

### ctx-core/matrix

### ctx-core/nullish

### ctx-core/number

### ctx-core/object

### ctx-core/promise

## ctx-core/queue

## ctx-core/random

## ctx-core/regex

## ctx-core/rmemo

The docs for rmemo are in https://github.com/ctx-core/rmemo. Since the source for rmemo has 0 dependencies & is isomorphic, it lives in the ctx-core/rmemo export. This allows rmemo to be used within ctx-core without added a dependency.

## ctx-core/run

## ctx-core/set

## ctx-core/sleep

## ctx-core/stream

## ctx-core/string

## ctx-core/tempfile

## ctx-core/test

## ctx-core/time

## ctx-core/tuple

## ctx-core/types

## ctx-core/uri

## ctx-core/uuid

## ctx-core/web_animation

The docs for ctx-core/web_animation are in https://github.com/ctx-core/web_animation. Since the source for ctx-core/web_animation has 0 dependencies & is isomorphic, it lives in the ctx-core/web_animation export. This allows ctx-core/web_animation to be used within ctx-core without added a dependency.
