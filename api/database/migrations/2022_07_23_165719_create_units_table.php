<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('units', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('name', 192);
            $table->string('ShortName', 192);
            $table->integer('base_unit')->nullable()->index('base_unit');
            $table->char('operator', 192)->nullable()->default('*');
            $table->double('operator_value')->nullable()->default(1);
            $table->timestamps(6);
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('units');
    }
}
