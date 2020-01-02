<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use JWTAuth;
use JWTAuthException;

use App\Models\User;

use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\RegistrationRequest;
use Exception;

class UserController extends Controller
{
    /**
     * Undocumented function
     *
     * @param String $email
     * @param String $password
     * @return void
     */
    private function __getToken($email, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            $data = [
                'email' => $email,
                'password' => $password,
            ];
            $token = auth('api')->attempt($data);
            if (!$token) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token' => $token
                ], 204);
            } else {
                return $token;
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ], 500);
        }
    }
    /**
     * Undocumented function
     *
     * @param LoginRequest $request
     * @return void
     */
    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user && \Hash::check($request->password, $user->password)) // The passwords match...
        {
            $token = self::__getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();
            if ($user->save()) {
                return response()->success([
                    'auth_token' => $user->auth_token,
                    'name' => $user->name,
                ]);
            }
        } else {
            return response()->error('User record not found');
        }
    }

    /**
     * Undocumented function
     *
     * @param RegistrationRequest $request
     * @return void
     */
    public function register(RegistrationRequest $request)
    {
        $payload = [
            'password' => \Hash::make($request->password),
            'email' => $request->email,
            'name' => $request->name,
            'auth_token' => ''
        ];

        $user = new User($payload);
        if ($user->save()) :
            $token = self::__getToken($request->email, $request->password); // generate user token

            if (!is_string($token))
                return response()->json([
                    'success' => false,
                    'data' => 'Token generation failed'
                ], 201);

            $user = User::where('email', $request->email)->get()->first();
            $user->auth_token = $token; // update user token
            $user->save();
            $response = ['success' => true, 'data' => [
                'name' => $user->name,
                'id' => $user->id,
                'email' => $request->email,
                'auth_token' => $token
            ]];
        else :
            $response = ['success' => false, 'data' => 'Couldnt register user'];
        endif;
        return response()->json($response, 201);
    }

    public function logout()
    {
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @param integer $id
     * @return void
     */
    public function get(Request $request, int $id)
    {
        try {
            $user = User::where('id', $id)
                ->first();
            if ($user) {
                return response()->json([
                    'success' => true,
                    'data' => $user
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'data' => 'User record not found',
                ], 404);
            }
        } catch (\Exception $ex) {
            return response()->json([
                'success' => false,
                'data' => $ex->getMessage(),
            ], 500);
        }
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function all(Request $request)
    {
        try {
            $users = User::all();
            if ($users->count()) {
                return response()->json([
                    'success' => true,
                    'data' => $users,
                ], 200);
            } else {
                return response()->json([
                    'success' => true,
                    'data' => 'User record not found',
                ], 404);
            }
        } catch (\Exception $ex) {
            return response()->json([
                'success' => false,
                'data' => $ex->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, int $id)
    {
        $user = User::find($id);
    }

    public function delete(Request $request, int $id)
    {
        $user = User::find($id);
    }
}
